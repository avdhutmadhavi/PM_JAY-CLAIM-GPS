# PM-JAY Claim GPS

A practical healthcare navigation service built with Node.js, Express, and SQLite. The app helps people describe a healthcare need, review next steps, search for real nearby hospitals in Google Maps, check saved assistance requests, and access local guidance.

## Features

- Need capture in plain language with English/Hindi/Marathi support
- Next-step guidance and document prep checklist
- Nearby hospital search handoff to Google Maps using the user's permitted location
- Assistance request persistence and status lookup
- Human support and help pages
- Offline draft support and a basic service worker for cached shell assets
- Server-side validation and database-backed endpoints

## Local setup

1. Install dependencies:
   npm install
2. Copy the example environment file:
   copy .env.example .env
3. Start the app:
   npm start
4. Open http://localhost:3000

## API overview

- GET /api/health
- POST /api/requests
- GET /api/requests/:reference
- POST /api/help-requests

## Notes

- The app uses SQLite locally so it works without external databases or credentials.
- Choosing location search redirects the browser to Google Maps with a hospital search centered on the user's current coordinates. The app itself does not receive or save those coordinates.
- Google Maps provides the results and directions. The app does not verify a hospital's PM-JAY empanelment or treatment availability; confirm both with official channels before visiting.
- Sensitive personal data should not be entered in the demo environment.
