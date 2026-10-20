const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = Number(process.env.PORT || 3000);
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'pmjay.db');
const rateLimitMap = new Map();

const db = new sqlite3.Database(DB_PATH, (error) => {
  if (error) {
    console.error('Failed to open database:', error.message);
    process.exit(1);
  }

  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference TEXT UNIQUE NOT NULL,
        description TEXT NOT NULL,
        language TEXT NOT NULL,
        category TEXT,
        status TEXT NOT NULL DEFAULT 'Received',
        notes TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        source TEXT DEFAULT 'web'
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS request_status_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        request_id INTEGER NOT NULL,
        status TEXT NOT NULL,
        note TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (request_id) REFERENCES requests(id)
      )
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS help_requests (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        reference TEXT UNIQUE NOT NULL,
        help_type TEXT NOT NULL,
        description TEXT,
        contact_channel TEXT,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        status TEXT NOT NULL DEFAULT 'Received'
      )
    `);
  });
});

function generateReference(prefix = 'PMJAY') {
  const year = new Date().getFullYear();
  const value = String(Math.floor(100000 + Math.random() * 900000));
  return `${prefix}-${year}-${value}`;
}

function ensureUniqueReference() {
  return new Promise((resolve, reject) => {
    const candidate = generateReference();
    db.get('SELECT 1 FROM requests WHERE reference = ?', [candidate], (error, row) => {
      if (error) {
        reject(error);
        return;
      }
      if (row) {
        resolve(ensureUniqueReference());
        return;
      }
      resolve(candidate);
    });
  });
}

function rateLimit(req, res, next) {
  const key = req.ip || 'unknown';
  const now = Date.now();
  const entries = rateLimitMap.get(key) || [];
  const recent = entries.filter((timestamp) => now - timestamp < 60000);
  recent.push(now);
  rateLimitMap.set(key, recent);

  if (recent.length > 30) {
    return res.status(429).json({ error: 'Too many requests from this device. Please wait a moment and try again.' });
  }

  return next();
}

function normalizeDescription(value) {
  const cleaned = String(value || '').trim();
  if (!cleaned) {
    throw new Error('Description is required.');
  }
  if (cleaned.length < 8) {
    throw new Error('Please provide a bit more detail so we can guide you properly.');
  }
  return cleaned;
}

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api/requests', rateLimit);
app.use('/api/help-requests', rateLimit);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'pm-jay-claim-gps', database: 'sqlite', timestamp: new Date().toISOString() });
});

app.post('/api/requests', async (req, res) => {
  const { description, language = 'en', category = 'general-care' } = req.body || {};

  try {
    const cleanedDescription = normalizeDescription(description);
    const safeLanguage = String(language || 'en').slice(0, 10);
    const safeCategory = String(category || 'general-care').slice(0, 30);
    const reference = await ensureUniqueReference();

    db.run(
      `INSERT INTO requests (reference, description, language, category, status, notes, source) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [reference, cleanedDescription, safeLanguage, safeCategory, 'Received', 'Request submitted through Claim GPS web form.', 'web'],
      function (insertError) {
        if (insertError) {
          res.status(500).json({ error: 'Unable to save your assistance request.' });
          return;
        }

        db.run(
          'INSERT INTO request_status_history (request_id, status, note) VALUES (?, ?, ?)',
          [this.lastID, 'Received', 'Request received and saved to the database.'],
          (historyError) => {
            if (historyError) {
              res.status(500).json({ error: 'Request saved, but status history could not be created.' });
              return;
            }

            res.status(201).json({
              reference,
              status: 'Received',
              description: cleanedDescription,
              language: safeLanguage,
              category: safeCategory,
              createdAt: new Date().toISOString(),
              note: 'Follow-up is tracked through this application and can be checked using the request reference.'
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(400).json({ error: error.message || 'Unable to process your request.' });
  }
});

app.get('/api/requests/:reference', (req, res) => {
  const reference = String(req.params.reference || '').trim().toUpperCase();
  const pattern = /^PMJAY-\d{4}-\d{6}$/i;

  if (!pattern.test(reference)) {
    res.status(400).json({ error: 'Reference number format is invalid.' });
    return;
  }

  db.get(
    'SELECT * FROM requests WHERE upper(reference) = ?',
    [reference],
    (error, row) => {
      if (error) {
        res.status(500).json({ error: 'Unable to lookup the request.' });
        return;
      }

      if (!row) {
        res.status(404).json({ error: 'Reference number not found.' });
        return;
      }

      db.all(
        'SELECT * FROM request_status_history WHERE request_id = ? ORDER BY created_at ASC',
        [row.id],
        (historyError, historyRows) => {
          if (historyError) {
            res.status(500).json({ error: 'Unable to load the status timeline.' });
            return;
          }

          res.json({
            reference: row.reference,
            description: row.description,
            language: row.language,
            category: row.category,
            status: row.status,
            updatedAt: row.updated_at,
            createdAt: row.created_at,
            note: row.notes,
            history: historyRows
          });
        }
      );
    }
  );
});

app.post('/api/help-requests', (req, res) => {
  const { helpType = 'asha', description = 'Need help understanding next steps.', contactChannel = 'phone' } = req.body || {};
  const reference = generateReference('HELP');

  db.run(
    'INSERT INTO help_requests (reference, help_type, description, contact_channel, status) VALUES (?, ?, ?, ?, ?)',
    [reference, String(helpType), String(description).trim(), String(contactChannel), 'Received'],
    (error) => {
      if (error) {
        res.status(500).json({ error: 'Unable to save your help request.' });
        return;
      }

      res.status(201).json({
        reference,
        status: 'Received',
        helpType,
        message: 'Support request received. The application tracks the request and offers a local follow-up reference.'
      });
    }
  );
});

app.get('/api/health-check', (_req, res) => {
  res.json({ ok: true });
});

app.use(express.static(path.join(__dirname)));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

app.listen(PORT, () => {
  console.log(`PM-JAY Claim GPS running at http://localhost:${PORT}`);
});
