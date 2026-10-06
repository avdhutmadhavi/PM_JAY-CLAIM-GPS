const hospitalData = [
  {
    id: 'district-hospital',
    name: 'District Hospital',
    distance: '2.4 km',
    status: 'PM-JAY empanelled',
    statusType: 'normal',
    address: 'Ward 12, Nagpur Road, Nagpur',
    phone: '0712-555-0101',
    availability: 'General OPD and surgery support available',
    assistance: ['Eye screening', 'Claim guidance', 'Referral desk']
  },
  {
    id: 'shree-care',
    name: 'Shree Care Hospital',
    distance: '4.1 km',
    status: 'PM-JAY empanelled',
    statusType: 'normal',
    address: 'Near Main Market, Civil Lines',
    phone: '0712-555-0148',
    availability: 'Specialist consultation available',
    assistance: ['Cardiac support', 'Documentation help', 'Hospital liaison']
  },
  {
    id: 'community-hospital',
    name: 'Community Hospital',
    distance: '6.8 km',
    status: 'Check availability',
    statusType: 'warning',
    address: 'Bajaj Square, Sadar',
    phone: '0712-555-0182',
    availability: 'Phone confirmation recommended',
    assistance: ['Basic treatment support', 'Referral coordination']
  }
];

const translations = {
  en: {
    home: 'Home',
    findHospital: 'Find Hospital',
    checkStatus: 'Check Status',
    help: 'Help',
    navSupport: 'Healthcare Navigation Assistant',
    homeTitle: 'Find the right PM-JAY help, one step at a time.',
    homeSub: 'Tell us what healthcare help you need. We’ll guide you toward the next step.',
    tellNeed: 'Tell Us Your Need',
    findHospitalBtn: 'Find a PM-JAY Hospital',
    checkRequest: 'Check Request / Claim Status',
    needPageTitle: 'What healthcare help do you need?',
    needPageSub: 'Describe your need in simple words.',
    voiceButton: 'Tap to speak',
    listening: 'Listening...',
    heard: 'We heard:',
    examplePlaceholder: 'Example: Mujhe aankh ka operation karwana hai.',
    continue: 'Continue',
    smsInstead: 'Use SMS instead',
    needHuman: 'Need human help?',
    confirmTitle: 'We understood your need',
    requestNote: 'We use your request to guide you to relevant PM-JAY information. Final eligibility and coverage are confirmed through official channels.',
    confirm: 'Confirm',
    edit: 'Edit',
    nextStepTitle: "Here's your next step",
    resultLabel: 'PM-JAY information available',
    findHospitalAction: 'Find PM-JAY Hospital',
    docsAction: 'Documents & Next Steps',
    statusAction: 'Check Request / Claim Status',
    humanAction: 'Get Human Help',
    hospitalTitle: 'Find a PM-JAY hospital',
    hospitalSearch: 'Search by hospital, area or district',
    useLocation: 'Use my location',
    hospitalPrototype: 'Prototype/simulated information',
    hospitalCall: 'Call',
    hospitalDirections: 'Directions',
    hospitalDetails: 'View details',
    detailsTitle: 'Hospital details',
    prepTitle: 'Prepare before you visit',
    nextStepsTitle: 'Your next steps',
    checklistReady: "You're ready for the next step.",
    statusTitle: 'Check Request / Claim Status',
    enterStatus: 'Enter reference number',
    exampleRef: 'PMJAY-2026-00124',
    checkStatusBtn: 'Check Status',
    submitted: 'Submitted',
    process: 'Under Process',
    actionRequired: 'Action Required',
    completed: 'Completed',
    statusUpdated: 'Last updated:',
    statusSimulated: 'Status shown here is simulated for this prototype.',
    offlineTitle: 'Your connection is weak',
    offlineMessage: 'You can still continue.',
    saveOffline: 'Save Request Offline',
    smsAction: 'Send by SMS',
    voiceMode: 'Use Voice / IVR',
    humanMode: 'Find Human Assistance',
    offlineSaved: 'Request saved on this device.',
    offlineRetry: 'Your request will be sent when your connection is restored.',
    humanTitle: 'Need someone to guide you?',
    ashaTitle: 'ASHA / Health Worker',
    ashaText: 'Help understanding the next step.',
    cscTitle: 'CSC Operator',
    cscText: 'Help with digital access and forms.',
    hospitalHelpTitle: 'Hospital Help Desk',
    hospitalHelpText: 'Help with PM-JAY navigation at the hospital.',
    requestHelp: 'Request Help',
    callBtn: 'Call',
    accessibilityTitle: 'Accessibility',
    textSize: 'Text Size',
    normal: 'Normal',
    large: 'Large',
    xlarge: 'Extra Large',
    reducedMotion: 'Reduced Motion',
    on: 'On',
    off: 'Off',
    highContrast: 'High Contrast',
    privacyText: 'Your information is used only to demonstrate this prototype. Avoid entering real medical or personal information.',
    aboutTitle: 'How it works',
    aboutBody: 'Tell us your need, understand the next step, find a hospital or support service, and prepare for your visit.',
    searchNoResults: 'No hospitals found for your search.',
    searchTryAnother: 'Try another location.',
    statusNotFound: 'Reference number not found.',
    statusTryAgain: 'Please check the number and try again.',
    voiceFailure: "We couldn't understand that.",
    voiceFailureSecondary: 'Please try again or type your request.',
    weakInternet: 'Connection is weak. Your request has been saved.',
    readyForNext: "You're ready for the next step.",
    actionAlready: 'Action confirmed',
    helpRequestReceived: 'Help request received',
    assistanceCreated: 'An assistance request has been created.',
    referenceTag: 'Reference:',
    close: 'Close',
    footerHow: 'How It Works',
    footerPrivacy: 'Privacy',
    footerHelp: 'Help'
  },
  hi: {
    home: 'मुखपृष्ठ',
    findHospital: 'अस्पताल खोजें',
    checkStatus: 'स्थिति देखें',
    help: 'सहायता',
    navSupport: 'स्वास्थ्य सेवाएँ सहायक',
    homeTitle: 'PM-JAY की सही मदद एक कदम में खोजें।',
    homeSub: 'बताइए आपको किस प्रकार की स्वास्थ्य सहायता चाहिए। हम आपके अगले चरण की ओर मार्गदर्शन करेंगे।',
    tellNeed: 'अपनी आवश्यकता बताएं',
    findHospitalBtn: 'PM-JAY अस्पताल खोजें',
    checkRequest: 'अनुरोध / दावा स्थिति देखें',
    needPageTitle: 'आपको किस प्रकार की स्वास्थ्य सहायता चाहिए?',
    needPageSub: 'अपनी आवश्यकता सरल शब्दों में बताएं।',
    voiceButton: 'बोलने के लिए टैप करें',
    listening: 'सुन रहे हैं...',
    heard: 'हमने सुना:',
    examplePlaceholder: 'उदाहरण: Mujhe aankh ka operation karwana hai.',
    continue: 'जारी रखें',
    smsInstead: 'SMS का उपयोग करें',
    needHuman: 'मानव सहायता चाहिए?',
    confirmTitle: 'हमें आपकी जरूरत समझ आ गई',
    requestNote: 'हम आपकी मांग को प्रासंगिक PM-JAY जानकारी तक पहुँचाने के लिए उपयोग करते हैं। अंतिम पात्रता और कवरेज आधिकारिक चैनलों से पुष्टि की जाती है।',
    confirm: 'पुष्टि करें',
    edit: 'संपादित करें',
    nextStepTitle: 'आपका अगला कदम',
    resultLabel: 'PM-JAY जानकारी उपलब्ध है',
    findHospitalAction: 'PM-JAY अस्पताल ढूंढें',
    docsAction: 'दस्तावेज़ और अगले कदम',
    statusAction: 'अनुरोध / दावा स्थिति देखें',
    humanAction: 'मानवीय सहायता लें',
    hospitalTitle: 'PM-JAY अस्पताल खोजें',
    hospitalSearch: 'अस्पताल, क्षेत्र या जिले से खोजें',
    useLocation: 'मेरा स्थान उपयोग करें',
    hospitalPrototype: 'प्रोटोटाइप/सिमुलेटेड जानकारी',
    hospitalCall: 'कॉल करें',
    hospitalDirections: 'दिशानिर्देश',
    hospitalDetails: 'विवरण देखें',
    detailsTitle: 'अस्पताल विवरण',
    prepTitle: 'जाने से पहले तैयार रहें',
    nextStepsTitle: 'आपके अगले कदम',
    checklistReady: 'अगले चरण के लिए आप तैयार हैं।',
    statusTitle: 'अनुरोध / दावा स्थिति देखें',
    enterStatus: 'रेफरेंस नंबर दर्ज करें',
    exampleRef: 'PMJAY-2026-00124',
    checkStatusBtn: 'स्थिति देखें',
    submitted: 'प्रस्तुत',
    process: 'प्रक्रिया में',
    actionRequired: 'कार्य आवश्यक',
    completed: 'पूर्ण',
    statusUpdated: 'अंतिम अपडेट:',
    statusSimulated: 'यह स्थिति इस प्रोटोटाइप के लिए模拟 है।',
    offlineTitle: 'आपका इंटरनेट कमजोर है',
    offlineMessage: 'आप जारी रह सकते हैं।',
    saveOffline: 'अनुरोध ऑफलाइन सेव करें',
    smsAction: 'SMS द्वारा भेजें',
    voiceMode: 'वॉयस / IVR उपयोग करें',
    humanMode: 'मानवीय सहायता खोजें',
    offlineSaved: 'अनुरोध इस डिवाइस पर सेव हो गया।',
    offlineRetry: 'जब कनेक्शन बहाल होगा तो आपका अनुरोध भेज दिया जाएगा।',
    humanTitle: 'कौन आप की मदद करेगा?',
    ashaTitle: 'आशा / स्वास्थ्य कार्यकर्ता',
    ashaText: 'अगले कदम समझने में मदद।',
    cscTitle: 'सीएससी ऑपरेटर',
    cscText: 'डिजिटल एक्सेस और फॉर्म में मदद।',
    hospitalHelpTitle: 'अस्पताल हेल्प डेस्क',
    hospitalHelpText: 'अस्पताल में PM-JAY नेविगेशन में मदद।',
    requestHelp: 'सहायता मांगें',
    callBtn: 'कॉल करें',
    accessibilityTitle: 'पहुंच',
    textSize: 'टेक्स्ट आकार',
    normal: 'सामान्य',
    large: 'बड़ा',
    xlarge: 'बहुत बड़ा',
    reducedMotion: 'कम एनीमेशन',
    on: 'चालू',
    off: 'बंद',
    highContrast: 'उच्च कंट्रास्ट',
    privacyText: 'आपका डेटा केवल इस प्रोटोटाइप को दिखाने के लिए उपयोग किया जाता है। वास्तविक चिकित्सा या व्यक्तिगत जानकारी दर्ज न करें।',
    aboutTitle: 'यह कैसे काम करता है',
    aboutBody: 'अपनी आवश्यकता बताएं, अगले कदम को समझें, अस्पताल या सहायता सेवा खोजें और अपनी यात्रा की तैयारी करें।',
    searchNoResults: 'आपकी खोज से कोई अस्पताल नहीं मिला।',
    searchTryAnother: 'दूसरा स्थान आजमाएँ।',
    statusNotFound: 'रेफरेंस नंबर नहीं मिला।',
    statusTryAgain: 'कृपया नंबर की जाँच कर पुनः प्रयास करें।',
    voiceFailure: 'हमें समझ नहीं आया।',
    voiceFailureSecondary: 'कृपया फिर से प्रयास करें या टाइप करें।',
    weakInternet: 'कनेक्शन कमजोर है। आपका अनुरोध सेव हो गया है।',
    readyForNext: 'अगले चरण के लिए आप तैयार हैं।',
    actionAlready: 'कार्रवाई पुष्टि',
    helpRequestReceived: 'सहायता अनुरोध प्राप्त हुआ',
    assistanceCreated: 'सहायता अनुरोध बनाया गया है।',
    referenceTag: 'रेफरेंस:',
    close: 'बंद करें',
    footerHow: 'यह कैसे काम करता है',
    footerPrivacy: 'गोपनीयता',
    footerHelp: 'सहायता'
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    findHospital: 'रुग्णालय शोधा',
    checkStatus: 'स्थिती तपासा',
    help: 'मदत',
    navSupport: 'आरोग्यदर्शन सहाय्यक',
    homeTitle: 'PM-JAY साठी योग्य मदत एका श्वासात शोधा.',
    homeSub: 'तुम्हाला कोणती आरोग्य मदत हवी आहे ते सांगा. आम्ही तुमच्या पुढच्या पायरीकडे मार्गदर्शन करू.',
    tellNeed: 'तुमची गरज सांगा',
    findHospitalBtn: 'PM-JAY रुग्णालय शोधा',
    checkRequest: 'अर्ज / दावा स्थिती तपासा',
    needPageTitle: 'तुम्हाला कोणती आरोग्य मदत हवी आहे?',
    needPageSub: 'तुमची गरज सोप्या शब्दांत सांगा.',
    voiceButton: 'बोलण्यासाठी टॅप करा',
    listening: 'ऐकतो आहे...',
    heard: 'आम्हाला ऐकू आले:',
    examplePlaceholder: 'उदाहरण: Mujhe aankh ka operation karwana hai.',
    continue: 'पुढे जा',
    smsInstead: 'SMS वापरा',
    needHuman: 'मानवी मदत हवी आहे?',
    confirmTitle: 'आम्हाला तुमची गरज समजली',
    requestNote: 'आम्ही तुमच्या विनंतीवर आधारित PM-JAY माहिती मार्गदर्शन करतो. अंतिम पात्रता आणि कव्हरेज अधिकृत माध्यमातून तपासली जाते.',
    confirm: 'पुष्टी करा',
    edit: 'संपादित करा',
    nextStepTitle: 'तुमचा पुढचा टप्पा',
    resultLabel: 'PM-JAY माहिती उपलब्ध आहे',
    findHospitalAction: 'PM-JAY रुग्णालय शोधा',
    docsAction: 'दस्तऐवज आणि पुढील पायऱ्या',
    statusAction: 'अर्ज / दावा स्थिती तपासा',
    humanAction: 'मानवी मदत घ्या',
    hospitalTitle: 'PM-JAY रुग्णालय शोधा',
    hospitalSearch: 'रुग्णालय, परिसर किंवा जिल्ह्याद्वारे शोधा',
    useLocation: 'माझा Standort वापरा',
    hospitalPrototype: 'प्रोटोटाइप/सिम्युलेटेड माहिती',
    hospitalCall: 'कॉल करा',
    hospitalDirections: 'दिशा',
    hospitalDetails: 'तपशील पहा',
    detailsTitle: 'रुग्णालय तपशील',
    prepTitle: 'जाण्यापूर्वी तयारी करा',
    nextStepsTitle: 'तुमची पुढील पायऱ्या',
    checklistReady: 'पुढच्या टप्प्यासाठी तुम्ही तयार आहात.',
    statusTitle: 'अर्ज / दावा स्थिती तपासा',
    enterStatus: 'संदर्भ क्रमांक प्रविष्ट करा',
    exampleRef: 'PMJAY-2026-00124',
    checkStatusBtn: 'स्थिती तपासा',
    submitted: 'सबमिट झाले',
    process: 'प्रक्रियेत',
    actionRequired: 'कारवाई आवश्यक',
    completed: 'पूर्ण',
    statusUpdated: 'अंतिम अपडेट:',
    statusSimulated: 'ही स्थिती या प्रोटोटाइपसाठी सिम्युलेटेड आहे.',
    offlineTitle: 'तुमचे कनेक्शन कमकुवत आहे',
    offlineMessage: 'तुम्ही पुढे जाऊ शकता.',
    saveOffline: 'अर्ज ऑफलाइन सेव करा',
    smsAction: 'SMS द्वारे पाठवा',
    voiceMode: 'व्हॉइस / IVR वापरा',
    humanMode: 'मानवी मदत शोधा',
    offlineSaved: 'अर्ज या डिव्हाइसवर सेव झाला आहे.',
    offlineRetry: 'कनेक्शन परत आल्यावर तुमचा अर्ज पाठवला जाईल.',
    humanTitle: 'कोणीतरी तुमच्यासाठी मार्गदर्शन करेल का?',
    ashaTitle: 'आशा / आरोग्य कर्मचारी',
    ashaText: 'पुढील पायरी समजून घेण्यास मदत.',
    cscTitle: 'CSC ऑपरेटर',
    cscText: 'डिजिटल प्रवेश आणि फॉर्म्समध्ये मदत.',
    hospitalHelpTitle: 'रुग्णालय हेल्प डेस्क',
    hospitalHelpText: 'रुग्णालयामध्ये PM-JAY नेव्हिगेशनमध्ये मदत.',
    requestHelp: 'मदत मागा',
    callBtn: 'कॉल करा',
    accessibilityTitle: 'सुलभता',
    textSize: 'मजकूर आकार',
    normal: 'सामान्य',
    large: 'मोठा',
    xlarge: 'खूप मोठा',
    reducedMotion: 'कमी अॅनिमेशन',
    on: 'चालू',
    off: 'बंद',
    highContrast: 'उच्च कॉन्ट्रास्ट',
    privacyText: 'तुमची माहिती फक्त या प्रोटोटाइपचे प्रदर्शनासाठी वापरली जाते. वास्तविक वैद्यकीय किंवा वैयक्तिक माहिती भरा नाही.',
    aboutTitle: 'हे कसे काम करते',
    aboutBody: 'तुमची गरज सांगा, पुढील पायरी समजून घ्या, रुग्णालय किंवा मदत सेवा शोधा आणि भेटीसाठी तयारी करा.',
    searchNoResults: 'तुमच्या शोधासाठी कोणतेही रुग्णालय आढळले नाही.',
    searchTryAnother: 'दुसरा स्थान वापरून पहा.',
    statusNotFound: 'संदर्भ क्रमांक सापडला नाही.',
    statusTryAgain: 'कृपया क्रमांक तपासा आणि पुन्हा प्रयत्न करा.',
    voiceFailure: 'आम्हाला समजू शकले नाही.',
    voiceFailureSecondary: 'कृपया पुन्हा प्रयत्न करा किंवा मजकूर टाइप करा.',
    weakInternet: 'कनेक्शन कमकुवत आहे. तुमचा अर्ज सेव झाला आहे.',
    readyForNext: 'पुढच्या टप्प्यासाठी तुम्ही तयार आहात.',
    actionAlready: 'कारवाईची पुष्टी',
    helpRequestReceived: 'मदत विनंती प्राप्त झाली',
    assistanceCreated: 'मदत विनंती तयार केली गेली आहे.',
    referenceTag: 'संदर्भ:',
    close: 'बंद करा',
    footerHow: 'हे कसे काम करते',
    footerPrivacy: 'गोपनीयता',
    footerHelp: 'मदत'
  }
};

const state = {
  view: 'home',
  language: localStorage.getItem('pmjay-language') || 'en',
  needText: '',
  voiceStatus: 'idle',
  selectedHospital: hospitalData[0],
  hospitalSearch: '',
  statusReference: 'PMJAY-2026-00124',
  statusChecked: false,
  statusValid: true,
  statusLoading: false,
  offlineSaved: false,
  accessibility: {
    size: localStorage.getItem('pmjay-font-size') || 'normal',
    reducedMotion: localStorage.getItem('pmjay-reduced-motion') === 'true',
    highContrast: localStorage.getItem('pmjay-high-contrast') === 'true'
  },
  checklist: {
    id: true,
    photo: false,
    referral: false
  }
};

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function updateDocumentSettings() {
  document.documentElement.lang = state.language;
  document.body.classList.remove('font-large', 'font-xlarge');
  if (state.accessibility.size === 'large') document.body.classList.add('font-large');
  if (state.accessibility.size === 'xlarge') document.body.classList.add('font-xlarge');
  document.body.classList.toggle('high-contrast', state.accessibility.highContrast);
  document.body.classList.toggle('reduced-motion', state.accessibility.reducedMotion);

  localStorage.setItem('pmjay-language', state.language);
  localStorage.setItem('pmjay-font-size', state.accessibility.size);
  localStorage.setItem('pmjay-reduced-motion', String(state.accessibility.reducedMotion));
  localStorage.setItem('pmjay-high-contrast', String(state.accessibility.highContrast));
}

function render() {
  updateDocumentSettings();
  const viewHtml = {
    home: renderHomeView(),
    need: renderNeedView(),
    understanding: renderUnderstandingView(),
    helpResult: renderHelpResultView(),
    hospitals: renderHospitalView(),
    hospitalDetail: renderHospitalDetailView(),
    documents: renderDocumentsView(),
    status: renderStatusView(),
    offline: renderOfflineView(),
    humanHelp: renderHumanHelpView(),
    accessibility: renderAccessibilityView(),
    about: renderAboutView()
  };

  document.getElementById('app-view').innerHTML = viewHtml[state.view] || viewHtml.home;
  syncNav();
  syncLanguageButtons();
  syncAccessibilityButtons();
}

function syncNav() {
  document.querySelectorAll('.nav-link').forEach((button) => {
    const isActive = button.dataset.view === state.view;
    button.classList.toggle('active', isActive);
  });

  const mainNav = document.querySelector('.main-nav');
  if (mainNav) mainNav.classList.remove('open');
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
}

function syncLanguageButtons() {
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === state.language);
  });
}

function syncAccessibilityButtons() {
  document.querySelectorAll('[data-size-option]').forEach((button) => {
    button.classList.toggle('active', button.dataset.sizeOption === state.accessibility.size);
  });
  document.querySelectorAll('[data-motion-toggle]').forEach((button) => {
    const isOn = button.dataset.motionToggle === 'on';
    button.classList.toggle('active', isOn === state.accessibility.reducedMotion);
  });
  document.querySelectorAll('[data-contrast-toggle]').forEach((button) => {
    const isOn = button.dataset.contrastToggle === 'on';
    button.classList.toggle('active', isOn === state.accessibility.highContrast);
  });
}

function addActionListeners() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.onclick = () => {
      const expanded = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.onclick = () => {
      state.language = button.dataset.lang;
      render();
    };
  });

  document.querySelectorAll('[data-close-modal="true"]').forEach((button) => {
    button.onclick = closeModal;
  });
}

function handleActionClick(event) {
  const button = event.currentTarget;
  const action = button.dataset.action;

  if (action === 'go-home') {
    state.view = 'home';
    render();
    return;
  }

  if (action === 'switch-view') {
    state.view = button.dataset.target || 'home';
    render();
    return;
  }

  if (action === 'continue-need') {
    const value = document.getElementById('need-input')?.value.trim() || state.needText;
    if (!value) {
      showToast(t('voiceFailureSecondary'));
      return;
    }
    state.needText = value;
    state.view = 'understanding';
    render();
    return;
  }

  if (action === 'voice-simulate') {
    state.voiceStatus = 'listening';
    render();
    setTimeout(() => {
      state.needText = 'Mujhe aankh ka operation karwana hai.';
      state.voiceStatus = 'done';
      render();
      showToast(`${t('heard')} Mujhe aankh ka operation karwana hai.`);
    }, 1400);
    return;
  }

  if (action === 'confirm-request') {
    state.view = 'helpResult';
    render();
    return;
  }

  if (action === 'edit-request') {
    state.view = 'need';
    render();
    return;
  }

  if (action === 'view-hospitals') {
    state.view = 'hospitals';
    render();
    return;
  }

  if (action === 'view-documents') {
    state.view = 'documents';
    render();
    return;
  }

  if (action === 'view-status') {
    state.view = 'status';
    render();
    return;
  }

  if (action === 'view-human') {
    state.view = 'humanHelp';
    render();
    return;
  }

  if (action === 'use-location') {
    state.hospitalSearch = 'Nagpur';
    render();
    showToast('Showing nearby facilities in Nagpur.');
    return;
  }

  if (action === 'hospital-view-details') {
    state.selectedHospital = hospitalData.find((hospital) => hospital.id === button.dataset.hospitalId) || hospitalData[0];
    state.view = 'hospitalDetail';
    render();
    return;
  }

  if (action === 'hospital-call') {
    const hospitalName = button.dataset.hospitalName || 'PM-JAY support desk';
    showToast(`Calling ${hospitalName}...`);
    return;
  }

  if (action === 'hospital-directions') {
    const hospitalName = button.dataset.hospitalName || 'selected hospital';
    showToast(`Directions opened for ${hospitalName}.`);
    return;
  }

  if (action === 'hospital-continue') {
    state.view = 'documents';
    render();
    return;
  }

  if (action === 'toggle-checklist') {
    const key = button.dataset.checkKey;
    state.checklist[key] = !state.checklist[key];
    render();
    return;
  }

  if (action === 'submit-status') {
    const ref = document.getElementById('status-ref')?.value.trim() || state.statusReference;
    if (!ref) {
      showToast(t('statusTryAgain'));
      return;
    }

    state.statusReference = ref;
    state.statusLoading = true;
    render();

    setTimeout(() => {
      const valid = ref.toUpperCase().includes('PMJAY-2026-');
      state.statusChecked = true;
      state.statusValid = valid;
      state.statusLoading = false;
      render();

      if (!valid) {
        showToast(t('statusNotFound'));
      }
    }, 800);
    return;
  }

  if (action === 'save-offline') {
    const requestData = {
      needText: state.needText || 'Eye treatment assistance',
      savedAt: new Date().toISOString()
    };
    localStorage.setItem('pmjay-offline-request', JSON.stringify(requestData));
    state.offlineSaved = true;
    state.view = 'offline';
    render();
    showToast(t('weakInternet'));
    return;
  }

  if (action === 'open-sms') {
    openModal('sms');
    return;
  }

  if (action === 'open-human-modal') {
    const type = button.dataset.helpType || 'ASHA';
    const title = type === 'asha' ? t('helpRequestReceived') : t('helpRequestReceived');
    const message = `${t('assistanceCreated')} ${t('referenceTag')} HELP-2026-${String(Math.floor(Math.random() * 900) + 100)}`;
    openModal('confirm', `${title} — ${message}`);
    return;
  }

  if (action === 'toggle-size') {
    state.accessibility.size = button.dataset.sizeOption || 'normal';
    render();
    return;
  }

  if (action === 'toggle-motion') {
    state.accessibility.reducedMotion = button.dataset.motionToggle === 'on';
    render();
    return;
  }

  if (action === 'toggle-contrast') {
    state.accessibility.highContrast = button.dataset.contrastToggle === 'on';
    render();
    return;
  }

  if (action === 'hospital-search') {
    const value = document.getElementById('hospital-search')?.value.trim() || '';
    state.hospitalSearch = value;
    render();
    return;
  }
}

function openModal(type, customText) {
  const modalMap = {
    confirm: document.getElementById('confirm-modal'),
    sms: document.getElementById('sms-modal')
  };

  const modal = modalMap[type];
  if (!modal) return;

  const titleNode = modal.querySelector('h3');
  const bodyNode = modal.querySelector('p');

  if (type === 'confirm') {
    titleNode.textContent = t('helpRequestReceived');
    bodyNode.textContent = customText || t('assistanceCreated');
  }

  if (type === 'sms') {
    const preview = modal.querySelector('.sms-preview');
    if (preview) {
      preview.innerHTML = '<strong>PM-JAY HELP:</strong><span>Eye treatment assistance</span><span>Reference: PMJAY-2026-00124</span>';
    }
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach((modal) => modal.classList.add('hidden'));
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.getElementById('toast-container').appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2800);
}

function renderHomeView() {
  return `
    <section class="view-section">
      <div class="hero">
        <div>
          <span class="eyebrow">${t('navSupport')}</span>
          <h1>${t('homeTitle')}</h1>
          <p>${t('homeSub')}</p>
          <div class="hero-actions">
            <button class="primary-btn" data-action="switch-view" data-target="need">${t('tellNeed')}</button>
            <button class="secondary-btn" data-action="switch-view" data-target="hospitals">${t('findHospitalBtn')}</button>
          </div>
          <div class="btn-row" style="margin-top: 16px;">
            <button class="ghost-btn" data-view="status">${t('checkRequest')}</button>
          </div>
        </div>
        <div class="hero-flow">
          <div class="flow-steps">
            <span class="flow-pill">${t('tellNeed')}</span>
            <span class="flow-arrow">↓</span>
            <span class="flow-pill">${t('needPageTitle')}</span>
            <span class="flow-arrow">↓</span>
            <span class="flow-pill">${t('findHospitalBtn')}</span>
            <span class="flow-arrow">↓</span>
            <span class="flow-pill">${t('nextStepTitle')}</span>
          </div>
        </div>
      </div>

      <div class="section-shell">
        <div class="quick-actions">
          <button class="action-card" data-view="need" aria-label="${t('tellNeed')}">
            <span class="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-6 6v4a2 2 0 0 1-2 2v2h4.5v-1.3a2.2 2.2 0 0 1 2.2-2.2h3.6a2.2 2.2 0 0 1 2.2 2.2V17H20v-2a2 2 0 0 1-2-2V9a6 6 0 0 0-6-6Zm0 2.2a3.8 3.8 0 0 1 3.8 3.8v4H8.2V9A3.8 3.8 0 0 1 12 5.2Zm-3.5 11.4h7v1.4h-7v-1.4Z" fill="currentColor"/></svg>
            </span>
            <h3>${t('tellNeed')}</h3>
            <p>Speak or type your need in simple words.</p>
          </button>

          <button class="action-card" data-view="hospitals" aria-label="${t('findHospitalBtn')}">
            <span class="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a7 7 0 0 1 7 7c0 4.9-5.3 10.1-6.5 11.2a1 1 0 0 1-1.4 0C10.3 19.6 5 14.4 5 9.5a7 7 0 0 1 7-7Zm0 3.3a3.7 3.7 0 1 0 0 7.4a3.7 3.7 0 0 0 0-7.4Z" fill="currentColor"/></svg>
            </span>
            <h3>${t('findHospitalBtn')}</h3>
            <p>Locate nearby PM-JAY support options.</p>
          </button>

          <button class="action-card" data-view="status" aria-label="${t('checkStatus')}">
            <span class="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5A2.5 2.5 0 0 0 4.5 7v10A2.5 2.5 0 0 0 7 19.5h10A2.5 2.5 0 0 0 19.5 17V7A2.5 2.5 0 0 0 17 4.5H7Zm2 3h6v2H9v-2Zm0 4h8v2H9v-2Zm0 4h5v2H9v-2Z" fill="currentColor"/></svg>
            </span>
            <h3>${t('checkStatus')}</h3>
            <p>Track follow-up or claim progress.</p>
          </button>

          <button class="action-card" data-view="humanHelp" aria-label="${t('help')}">
            <span class="action-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5A4.5 4.5 0 0 1 16.5 8v1.5h-1.2v1.1a1.8 1.8 0 0 1-1.8 1.8h-1.1a1.8 1.8 0 0 1-1.8-1.8V9.5H9.5V8A4.5 4.5 0 0 1 12 3.5Zm-6.5 9.6a2.5 2.5 0 0 1 2.5 2.5V16h10v-1.4a2.5 2.5 0 0 1 2.5-2.5h.5v2.2a2.5 2.5 0 0 1-2.5 2.5H7.5A2.5 2.5 0 0 1 5 15.3v-2.2h.5Zm3.1 4.8h6.8v1.6H8.6v-1.6Z" fill="currentColor"/></svg>
            </span>
            <h3>${t('help')}</h3>
            <p>Speak to an ASHA worker or local support desk.</p>
          </button>
        </div>
      </div>

      <div class="section-shell">
        <div class="section-heading">
          <div>
            <h2>Designed for real-world access</h2>
          </div>
        </div>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a5 5 0 0 1 5 5v1h1.5A2.5 2.5 0 0 1 21 11.5v2a2.5 2.5 0 0 1-2.5 2.5H17v1a5 5 0 0 1-10 0v-1H5.5A2.5 2.5 0 0 1 3 13.5v-2A2.5 2.5 0 0 1 5.5 9H7V8a5 5 0 0 1 5-5Zm-3.5 8.5h7v-1a3.5 3.5 0 1 0-7 0v1Zm1 4.5h5v1.2a2.5 2.5 0 0 1-5 0V16Z" fill="currentColor"/></svg>
            </div>
            <h3>Voice & Local Language</h3>
            <p>Speak or type in a language you're comfortable with.</p>
          </div>
          <div class="feature-card">
            <div class="feature-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5A9.5 9.5 0 0 1 12 21.5a9.5 9.5 0 0 1-9.5-9.5A9.5 9.5 0 0 1 12 2.5Zm0 2.1A7.4 7.4 0 0 0 4.6 12a7.4 7.4 0 0 0 7.4 7.4A7.4 7.4 0 0 0 19.4 12A7.4 7.4 0 0 0 12 4.6Zm-1 3.4h2v5.5h-2V8Zm0 6.3h2v2h-2v-2Z" fill="currentColor"/></svg>
            </div>
            <h3>Low Internet</h3>
            <p>Save your request and continue when your connection returns.</p>
          </div>
          <div class="feature-card">
            <div class="feature-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5.5A2.5 2.5 0 0 1 9.5 3h5A2.5 2.5 0 0 1 17 5.5v1.7h1.5A2.5 2.5 0 0 1 21 9.7v8.8A2.5 2.5 0 0 1 18.5 21h-13A2.5 2.5 0 0 1 3 18.5V9.7A2.5 2.5 0 0 1 5.5 7.2H7V5.5Zm2 1.7h6v-1a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v1Zm-2.5 3.2h11v7.7h-11V10.4Z" fill="currentColor"/></svg>
            </div>
            <h3>Basic Phones</h3>
            <p>Use SMS or voice-based assistance when a smartphone isn't available.</p>
          </div>
          <div class="feature-card">
            <div class="feature-badge">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5c4 0 7.5 3.1 7.5 7.1a7.3 7.3 0 0 1-1.1 3.9L16 17.5H8l-2.4-3a7.3 7.3 0 0 1-1.1-3.9c0-4 3.5-7.1 7.5-7.1Zm0 3.2a3.6 3.6 0 0 0-3.6 3.6v.9h7.2v-.9A3.6 3.6 0 0 0 12 6.7Zm-4.1 7.9 1.1 1.7h6l1.1-1.7H7.9Z" fill="currentColor"/></svg>
            </div>
            <h3>Human Assistance</h3>
            <p>Get help from an ASHA worker, CSC operator or hospital help desk.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNeedView() {
  const currentValue = state.needText || 'Mujhe aankh ka operation karwana hai.';

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('needPageTitle')}</h1>
        <p>${t('needPageSub')}</p>
      </div>

      <div class="need-layout form-panel">
        <div class="voice-panel">
          <button class="voice-button ${state.voiceStatus === 'listening' ? 'recording' : ''}" data-action="voice-simulate" aria-label="Simulated voice input">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a4.2 4.2 0 0 1 4.2 4.2v5.7a4.2 4.2 0 1 1-8.4 0V7.7A4.2 4.2 0 0 1 12 3.5Zm-6.5 8.1h1.6v2.1A5.9 5.9 0 0 0 12 19.5a5.9 5.9 0 0 0 5.4-3.8v-2.1h1.6v2.1a7.5 7.5 0 0 1-7 5.4a7.5 7.5 0 0 1-7-5.4v-2.1Z" fill="currentColor"/></svg>
            <span>${state.voiceStatus === 'listening' ? t('listening') : t('voiceButton')}</span>
          </button>
          ${state.voiceStatus === 'done' ? `<div class="voice-heard">${t('heard')} ${escapeHtml(currentValue)}</div>` : ''}
        </div>

        <div class="form-stack">
          <div class="field-group">
            <label for="need-input">${t('needPageTitle')}</label>
            <textarea id="need-input" placeholder="${t('examplePlaceholder')}" aria-label="Describe your healthcare need">${escapeHtml(state.needText)}</textarea>
          </div>

          <div class="field-group">
            <label for="need-language">Language</label>
            <select id="need-language" class="inline-select" aria-label="Select language">
              <option value="en" ${state.language === 'en' ? 'selected' : ''}>English</option>
              <option value="hi" ${state.language === 'hi' ? 'selected' : ''}>हिन्दी</option>
              <option value="mr" ${state.language === 'mr' ? 'selected' : ''}>मराठी</option>
            </select>
          </div>

          <div class="inline-actions">
            <button class="primary-btn" data-action="continue-need" ${(!state.needText && state.voiceStatus !== 'done') ? 'disabled' : ''}>${t('continue')}</button>
          </div>

          <div class="assistive-links">
            <button class="link-button" data-action="open-sms">${t('smsInstead')}</button>
            <button class="link-button" data-action="switch-view" data-target="humanHelp">${t('needHuman')}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderUnderstandingView() {
  const requestText = state.needText || 'Mujhe aankh ka operation karwana hai.';

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('confirmTitle')}</h1>
      </div>

      <div class="understanding-box form-panel">
        <div class="request-quote">
          <strong>Eye treatment / surgery</strong>
          <div style="margin-top: 8px;">${t('heard')}<br>${escapeHtml(requestText)}</div>
        </div>

        <div class="btn-row">
          <button class="primary-btn" data-action="confirm-request">${t('confirm')}</button>
          <button class="secondary-btn" data-action="edit-request">${t('edit')}</button>
        </div>

        <div class="disclaimer">${t('requestNote')}</div>
      </div>
    </section>
  `;
}

function renderHelpResultView() {
  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('nextStepTitle')}</h1>
      </div>

      <div class="summary-card">
        <div class="card-title">Eye treatment / surgery</div>
        <div class="summary-badge">${t('resultLabel')}</div>
        <p>Confirm eligibility and coverage through official PM-JAY channels before treatment or admission.</p>
        <div class="action-grid">
          <button class="primary-action" data-action="switch-view" data-target="hospitals">${t('findHospitalAction')}</button>
          <button class="secondary-action" data-action="switch-view" data-target="documents">${t('docsAction')}</button>
          <button class="secondary-action" data-action="switch-view" data-target="status">${t('statusAction')}</button>
          <button class="secondary-action" data-action="switch-view" data-target="humanHelp">${t('humanAction')}</button>
        </div>
      </div>
    </section>
  `;
}

function renderHospitalView() {
  const searchValue = state.hospitalSearch.trim().toLowerCase();
  const filtered = hospitalData.filter((hospital) => {
    if (!searchValue) return true;
    const haystack = `${hospital.name} ${hospital.address} ${hospital.assistance.join(' ')}`.toLowerCase();
    return haystack.includes(searchValue);
  });

  const hospitalCards = filtered.length
    ? filtered
        .map(
          (hospital) => `
            <article class="hospital-card">
              <div class="hospital-meta">
                <h3>${hospital.name}</h3>
                <span class="hospital-distance">${hospital.distance}</span>
              </div>
              <span class="hospital-status ${hospital.statusType === 'warning' ? 'warning' : ''}">${hospital.status}</span>
              <div class="address-block">
                <span>${hospital.address}</span>
              </div>
              <div class="card-actions">
                <button class="small-btn btn-secondary" data-action="hospital-call" data-hospital-name="${escapeHtml(hospital.name)}">${t('hospitalCall')}</button>
                <button class="small-btn btn-secondary" data-action="hospital-directions" data-hospital-name="${escapeHtml(hospital.name)}">${t('hospitalDirections')}</button>
              </div>
              <button class="btn btn-primary" data-action="hospital-view-details" data-hospital-id="${hospital.id}">${t('hospitalDetails')}</button>
            </article>
          `
        )
        .join('')
    : `
      <div class="empty-state">
        <strong>${t('searchNoResults')}</strong>
        <p>${t('searchTryAnother')}</p>
      </div>
    `;

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('hospitalTitle')}</h1>
      </div>

      <div class="hospital-panel">
        <div class="hospital-controls">
          <div class="search-wrap">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3a7 7 0 0 1 5.2 12l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 1 1 10 3Zm0 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10Z" fill="currentColor"/></svg>
            <input id="hospital-search" value="${escapeHtml(state.hospitalSearch)}" placeholder="${t('hospitalSearch')}" aria-label="Search hospitals" />
          </div>
          <button class="secondary-btn" data-action="use-location">${t('useLocation')}</button>
        </div>

        <div class="meta-note" style="margin-top: 12px;">${t('hospitalPrototype')}</div>

        <div class="hospital-grid" style="margin-top: 24px;">${hospitalCards}</div>
      </div>
    </section>
  `;
}

function renderHospitalDetailView() {
  const hospital = state.selectedHospital || hospitalData[0];

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('detailsTitle')}</h1>
      </div>

      <div class="details-grid">
        <div class="hospital-panel">
          <div class="hospital-meta">
            <h2>${hospital.name}</h2>
            <span class="hospital-status">${hospital.status}</span>
          </div>
          <div class="detail-list">
            <div><span class="detail-label">Distance</span><span class="detail-value">${hospital.distance}</span></div>
            <div><span class="detail-label">Address</span><span class="detail-value">${hospital.address}</span></div>
            <div><span class="detail-label">Available assistance</span><span class="detail-value">${hospital.assistance.join(', ')}</span></div>
            <div><span class="detail-label">Phone</span><span class="detail-value">${hospital.phone}</span></div>
          </div>
          <div class="card-actions" style="margin-top: 20px;">
            <button class="small-btn btn-primary" data-action="hospital-call" data-hospital-name="${escapeHtml(hospital.name)}">Call Help Desk</button>
            <button class="small-btn btn-secondary" data-action="hospital-directions" data-hospital-name="${escapeHtml(hospital.name)}">Get Directions</button>
          </div>
          <div class="card-actions" style="margin-top: 12px;">
            <button class="small-btn btn-secondary" data-action="hospital-view-details" data-hospital-id="${hospital.id}">View Documents</button>
            <button class="small-btn btn-primary" data-action="hospital-continue">Continue</button>
          </div>
        </div>

        <div class="hospital-panel">
          <h3>Important note</h3>
          <p>Please confirm PM-JAY support and availability with the hospital before visiting.</p>
          <div class="status-actions" style="margin-top: 18px;">
            <button class="secondary-btn" data-action="view-documents">${t('docsAction')}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderDocumentsView() {
  const checklistItems = [
    { key: 'id', label: 'PM-JAY beneficiary / ID details' },
    { key: 'photo', label: 'Government photo ID if requested' },
    { key: 'referral', label: 'Referral / treatment documents, if applicable' }
  ];

  const allComplete = checklistItems.every((item) => state.checklist[item.key]);

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('prepTitle')}</h1>
      </div>

      <div class="documents-panel">
        <div class="checklist">
          ${checklistItems
            .map(
              (item) => `
                <label class="check-item ${state.checklist[item.key] ? 'checked' : ''}">
                  <input type="checkbox" ${state.checklist[item.key] ? 'checked' : ''} data-action="toggle-checklist" data-check-key="${item.key}" />
                  <span>${item.label}</span>
                </label>
              `
            )
            .join('')}
        </div>

        <div class="next-steps">
          <h3>${t('nextStepsTitle')}</h3>
          <div class="step-pill">1. Contact or visit the selected hospital.</div>
          <div class="step-pill">2. Ask the PM-JAY help desk for guidance.</div>
          <div class="step-pill">3. Keep your reference number for follow-up.</div>
        </div>

        ${allComplete ? `<div class="summary-badge" style="margin-top: 18px;">${t('readyForNext')}</div>` : ''}
      </div>
    </section>
  `;
}

function renderStatusView() {
  const timeline = [
    { key: 'submitted', label: t('submitted'), complete: true },
    { key: 'process', label: t('process'), complete: true },
    { key: 'action', label: t('actionRequired'), complete: false },
    { key: 'complete', label: t('completed'), complete: false }
  ];

  const inputValue = state.statusReference || 'PMJAY-2026-00124';

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('statusTitle')}</h1>
      </div>

      <div class="status-panel">
        <div class="field-group">
          <label for="status-ref">${t('enterStatus')}</label>
          <input id="status-ref" type="text" value="${escapeHtml(inputValue)}" placeholder="${t('exampleRef')}" aria-label="Reference number" />
        </div>
        <div class="status-actions">
          <button class="primary-btn" data-action="submit-status" ${state.statusLoading ? 'disabled' : ''}>${state.statusLoading ? 'Checking...' : t('checkStatusBtn')}</button>
        </div>

        ${state.statusChecked && !state.statusValid ? `<div class="alert-box" style="margin-top: 18px;">${t('statusNotFound')} ${t('statusTryAgain')}</div>` : ''}

        ${state.statusChecked && state.statusValid ? `
          <div class="status-track">
            <div class="status-row">
              ${timeline
                .map(
                  (item) => `
                    <div class="status-step ${item.complete ? 'complete' : ''}">
                      <span>${item.label}</span>
                    </div>
                  `
                )
                .join('')}
            </div>
            <div class="meta-note"><strong>${t('statusUpdated')}</strong> Today, 10:30 AM</div>
            <div class="meta-note">${t('statusSimulated')}</div>
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function renderOfflineView() {
  const saved = JSON.parse(localStorage.getItem('pmjay-offline-request') || 'null');

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('offlineTitle')}</h1>
        <p>${t('offlineMessage')}</p>
      </div>

      <div class="offline-grid">
        <div class="offline-card">
          <h3>${t('saveOffline')}</h3>
          <button class="primary-btn" data-action="save-offline">${t('saveOffline')}</button>
          <p>${saved ? `${t('offlineSaved')} ${t('offlineRetry')}` : 'No request has been saved on this device yet.'}</p>
        </div>
        <div class="offline-card">
          <h3>${t('smsAction')}</h3>
          <button class="secondary-btn" data-action="open-sms">${t('smsAction')}</button>
          <p>Send a compact summary when connectivity improves.</p>
        </div>
      </div>
    </section>
  `;
}

function renderHumanHelpView() {
  const helpOptions = [
    { key: 'asha', title: t('ashaTitle'), text: t('ashaText') },
    { key: 'csc', title: t('cscTitle'), text: t('cscText') },
    { key: 'hospital', title: t('hospitalHelpTitle'), text: t('hospitalHelpText') }
  ];

  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('humanTitle')}</h1>
      </div>

      <div class="human-grid">
        ${helpOptions
          .map(
            (option) => `
              <div class="human-card">
                <h3>${option.title}</h3>
                <p>${option.text}</p>
                <div class="btn-row">
                  <button class="primary-btn" data-action="open-human-modal" data-help-type="${option.key}">${t('requestHelp')}</button>
                  <button class="secondary-btn" data-action="hospital-call" data-hospital-name="${option.title}">${t('callBtn')}</button>
                </div>
              </div>
            `
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderAccessibilityView() {
  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('accessibilityTitle')}</h1>
      </div>

      <div class="accessibility-panel">
        <div class="toggle-row">
          <div>
            <strong>${t('textSize')}</strong>
          </div>
          <div class="toggle-group" role="group" aria-label="Text size selector">
            <button class="toggle-btn ${state.accessibility.size === 'normal' ? 'active' : ''}" data-action="toggle-size" data-size-option="normal">${t('normal')}</button>
            <button class="toggle-btn ${state.accessibility.size === 'large' ? 'active' : ''}" data-action="toggle-size" data-size-option="large">${t('large')}</button>
            <button class="toggle-btn ${state.accessibility.size === 'xlarge' ? 'active' : ''}" data-action="toggle-size" data-size-option="xlarge">${t('xlarge')}</button>
          </div>
        </div>

        <div class="toggle-row">
          <div>
            <strong>${t('reducedMotion')}</strong>
          </div>
          <div class="toggle-group" role="group" aria-label="Reduced motion switch">
            <button class="toggle-btn ${state.accessibility.reducedMotion ? 'active' : ''}" data-action="toggle-motion" data-motion-toggle="on">${t('on')}</button>
            <button class="toggle-btn ${!state.accessibility.reducedMotion ? 'active' : ''}" data-action="toggle-motion" data-motion-toggle="off">${t('off')}</button>
          </div>
        </div>

        <div class="toggle-row">
          <div>
            <strong>${t('highContrast')}</strong>
          </div>
          <div class="toggle-group" role="group" aria-label="High contrast switch">
            <button class="toggle-btn ${state.accessibility.highContrast ? 'active' : ''}" data-action="toggle-contrast" data-contrast-toggle="on">${t('on')}</button>
            <button class="toggle-btn ${!state.accessibility.highContrast ? 'active' : ''}" data-action="toggle-contrast" data-contrast-toggle="off">${t('off')}</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderAboutView() {
  return `
    <section class="view-section">
      <div class="page-header">
        <h1>${t('aboutTitle')}</h1>
      </div>

      <div class="about-grid">
        <div class="about-card">
          <h3>Need-first approach</h3>
          <p>${t('aboutBody')}</p>
        </div>
        <div class="about-card">
          <h3>Prototype notice</h3>
          <p>${t('privacyText')}</p>
        </div>
      </div>
    </section>
  `;
}

document.addEventListener('click', (event) => {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    handleActionClick({ currentTarget: actionTarget, target: event.target });
    return;
  }

  const viewTarget = event.target.closest('[data-view]');
  if (viewTarget) {
    const target = viewTarget.dataset.view;
    if (['accessibility', 'about', 'humanHelp', 'hospitals', 'home', 'status', 'need'].includes(target)) {
      state.view = target;
      render();
    }
    return;
  }

  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});

document.addEventListener('change', (event) => {
  if (event.target.id === 'need-language') {
    state.language = event.target.value;
    render();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'hospital-search') {
    state.hospitalSearch = event.target.value;
    render();
    return;
  }

  if (event.target.id === 'need-input') {
    state.needText = event.target.value;
    const continueBtn = document.querySelector('button[data-action="continue-need"]');
    if (continueBtn) {
      continueBtn.disabled = !event.target.value.trim();
    }
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateDocumentSettings();
  render();
  addActionListeners();
});
