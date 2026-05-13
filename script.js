/* ═══════════════════════════════════════════
   ABHAY RAJ PORTFOLIO — script.js
═══════════════════════════════════════════ */

const delay = ms => new Promise(r => setTimeout(r, ms));

/* ══════════════════════════════════════════
   PRELOADER — snappy & synced
══════════════════════════════════════════ */
(async function boot() {
  document.body.style.overflow = 'hidden';

  const lines = [
    'System Check... <span style="color:#22C55E">OK</span>',
    'Loading Abhay_Raj_Logic...',
    'Calibrating Discipline... <span style="color:#22C55E">100%</span>',
    'Initializing Curiosity Engine...',
    'Launching Interface...'
  ];

  const term   = document.getElementById('boot-term');
  const cursor = term.querySelector('.boot-cursor');

  for (let i = 0; i < lines.length; i++) {
    await delay(280 + i * 220);
    const sp = document.createElement('span');
    sp.className = 'boot-line';
    sp.innerHTML = '> ' + lines[i];
    term.insertBefore(sp, cursor);
    requestAnimationFrame(() => requestAnimationFrame(() => sp.classList.add('show')));
  }

  await delay(400); // short pause after last line

  cursor.style.display = 'none';

  // Fade terminal AND split panels simultaneously
  const pre = document.getElementById('preloader');
  pre.classList.add('split'); // CSS handles terminal fade + panel slide at once

  await delay(800); // just enough for panels to slide out
  pre.style.display = 'none';
  document.body.style.overflow = '';
})();

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
const toastEl  = document.getElementById('toast');
let toastTimer = null;

function showToast(msg) {
  toastEl.innerHTML = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 4000);
}

/* ══════════════════════════════════════════
   HERO — DO NOT TOUCH (20 messages)
══════════════════════════════════════════ */
const heroMsgs = [
  'Curiosity detected. Excellent.',
  'Rule #1: Always investigate the unknown.',
  'You passed the curiosity test.',
  'Engineers press buttons. It\'s what we do.',
  'System note: User shows promising exploratory behavior.',
  'Forbidden buttons are just poorly disguised invitations.',
  'Curiosity is the first step toward innovation.',
  'I see you\'re still here. I respect that.',
  'Warning: Continued clicking may result in unsolicited respect.',
  'At this point, you\'re basically my QA tester. Thank you.',
  'The best engineers test every button. You qualify.',
  'Error 418: I\'m a teapot. You\'re still clicking. We\'re both committed.',
  'Your persistence is literally the trait that builds great systems.',
  'Congratulations: You\'ve unlocked doing exactly what you want.',
  'This is the most productive procrastination I\'ve witnessed.',
  'You know what? I like you. Don\'t tell anyone.',
  'Fun fact: I built this button specifically for people like you.',
  'Still? I admire you. Most people give up after three clicks.',
  'Achievement unlocked: Tested every warning. Ignored all of them.',
  'Ok I see you. You\'re going to build something great. I can tell.'
];
let heroIdx = 0;

document.getElementById('dnt-btn').addEventListener('click', () => {
  showToast('// ' + heroMsgs[heroIdx % heroMsgs.length]);
  heroIdx++;
});

/* ══════════════════════════════════════════
   FOOTER EASTER EGG (15 messages)
══════════════════════════════════════════ */
const eggMsgs = [
  'You really don\'t follow instructions, do you?',
  'Still curious? Good.',
  'Persistence detected. That\'s a useful trait.',
  'At this point, we should probably build something together.',
  'Congratulations. You found the ending... and ignored it.',
  'Final verdict: Curious, persistent, and slightly rebellious.',
  'Back again? I expected as much.',
  'Round two. Respect.',
  'I\'ve run out of warnings. You\'ve run out of reasons to stop. We match.',
  'This is the digital equivalent of reading terms and conditions. Legendary.',
  'You and I are going to get along just fine.',
  'Every click is a choice. You chose chaos. I respect it.',
  'I told you not to click. Rebel or engineer — same thing.',
  'I give up. You win. Whatever the prize is — it\'s yours.',
  'Achievement unlocked: Found the bottom of the internet. And kept going.'
];
let eggIdx = 0;

document.getElementById('footer-egg').addEventListener('click', () => {
  showToast('// ' + eggMsgs[eggIdx % eggMsgs.length]);
  eggIdx++;
});

/* ══════════════════════════════════════════
   MODAL HELPERS
══════════════════════════════════════════ */
const modalEl = document.getElementById('modal');
const modalX  = document.getElementById('modal-x');

function openModal({ icon, title, tag, body, body2, chips }) {
  document.getElementById('m-icon').textContent  = icon;
  document.getElementById('m-title').textContent = title;
  document.getElementById('m-tag').textContent   = tag;
  document.getElementById('m-body').textContent  = body;
  document.getElementById('m-body2').textContent = body2 || '';
  document.getElementById('m-chips').innerHTML   = chips.map(c => `<span class="chip">${c}</span>`).join('');
  modalEl.classList.add('on');
  document.body.style.overflow = 'hidden';
  modalX.focus();
}

function closeModal() {
  modalEl.classList.remove('on');
  document.body.style.overflow = '';
}

modalX.addEventListener('click', closeModal);
modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ══════════════════════════════════════════
   SKILL MODALS
══════════════════════════════════════════ */
const skillData = {
  html5: {
    icon: '🏗', title: 'HTML5', tag: 'CURRENT STACK · FOUNDATION · WEB',
    body: 'HTML5 is the skeleton of every webpage. It structures all content — headings, paragraphs, images, links, forms, video and audio — using semantic elements that give meaning to each part of the page.',
    body2: 'Why it matters: Every website ever built uses HTML. HTML5 adds native features like canvas, video/audio, and semantic tags that improve accessibility and SEO. It\'s the non-negotiable first language of the web.',
    chips: ['Foundation', 'Semantic', 'SEO', 'Accessibility', 'Non-negotiable']
  },
  css3: {
    icon: '🎨', title: 'CSS3', tag: 'CURRENT STACK · STYLING · LAYOUT',
    body: 'CSS3 is what makes a page look and feel like something worth using. It controls every visual detail — colors, fonts, spacing, layouts, animations, and how a site adapts across screen sizes.',
    body2: 'Why it matters: Modern CSS with Flexbox and Grid can build complex, responsive layouts without JS. CSS animations create polished experiences. It\'s what separates a blank document from a real product.',
    chips: ['Styling', 'Flexbox', 'Grid', 'Animation', 'Responsive']
  },
  tailwind: {
    icon: '💨', title: 'Tailwind CSS', tag: 'CURRENT STACK · FRAMEWORK · RAPID DEV',
    body: 'Tailwind is a utility-first framework that gives you pre-built class names you apply directly in HTML. It enforces consistent design tokens and dramatically speeds up styling.',
    body2: 'Why it matters: Tailwind is widely adopted in professional projects because it accelerates development without sacrificing flexibility. It teaches design system thinking and is the most popular CSS framework in modern web dev.',
    chips: ['Utility-first', 'Design system', 'Rapid dev', 'Industry standard']
  },
  javascript: {
    icon: '⚡', title: 'JavaScript', tag: 'CURRENT STACK · INTERACTIVITY · FULL-STACK POTENTIAL',
    body: 'JavaScript is the only language that runs natively in browsers. It handles everything interactive — clicks, form validation, API requests, animations, and real-time updates without page reload.',
    body2: 'Why it matters: JS is one of the most important languages to learn deeply. With Node.js it powers servers. With React/Vue it builds complex apps. Mastering JS opens more doors than almost any other technology.',
    chips: ['Interactivity', 'APIs', 'DOM', 'Node.js', 'Full-stack']
  },
  python: {
    icon: '🐍', title: 'Python', tag: 'CURRENTLY LEARNING · BACKEND · AI/ML GATEWAY',
    body: 'Python is one of the most versatile and readable languages ever made. It\'s used in web backends, data science, artificial intelligence, machine learning, scripting, and automation.',
    body2: 'Why it matters: Python\'s syntax makes it fast to learn and write. It\'s the primary language for AI/ML — directly aligned with your roadmap. Django and Flask power major backends. Learning Python now prepares you for AI later.',
    chips: ['Backend', 'AI/ML gateway', 'Automation', 'Data science', 'High demand']
  },
  backend: {
    icon: '🖥', title: 'Backend Fundamentals', tag: 'CURRENTLY LEARNING · SERVERS · DATABASES',
    body: 'The backend is everything users never see but always depend on — servers, databases, APIs, authentication, business logic, and data management. It\'s the engine beneath every application.',
    body2: 'Why it matters: Understanding backends transforms you from a front-end developer into a full-stack engineer. It\'s what lets you build apps that store data, serve real users, handle logins, and communicate with external services.',
    chips: ['Servers', 'Databases', 'REST APIs', 'Auth', 'Full-stack']
  },
  cpp: {
    icon: '⚙️', title: 'C / C++', tag: 'ROADMAP · SYSTEMS · LOW-LEVEL',
    body: 'C and C++ are low-level languages that give direct control over memory and hardware. C is the foundation of operating systems, compilers, and embedded systems. C++ extends it with object-oriented features.',
    body2: 'Why it matters: Learning C teaches exactly how computers work at hardware level. It makes you a stronger programmer in every other language. C++ powers game engines, browsers, and high-performance software. Essential for DSA mastery.',
    chips: ['Memory control', 'Systems', 'Performance', 'DSA foundation']
  },
  dsa: {
    icon: '🧩', title: 'Data Structures & Algorithms', tag: 'ROADMAP · PROBLEM SOLVING · INTERVIEWS',
    body: 'DSA is the science of organising and processing data efficiently. Arrays, linked lists, trees, graphs, sorting, searching, dynamic programming — these are the building blocks of all efficient software.',
    body2: 'Why it matters: DSA separates good engineers from great ones. It\'s the core of technical interviews at every major company. It teaches you to think about time and memory complexity — skills that determine whether your code scales or breaks.',
    chips: ['Efficiency', 'Interviews', 'Logical thinking', 'Scalability']
  },
  aiml: {
    icon: '🤖', title: 'AI / Machine Learning', tag: 'ROADMAP · FUTURE TECH · PYTHON POWERED',
    body: 'Machine learning teaches computers to learn patterns from data rather than explicit rules. Neural networks, classification, regression, NLP, computer vision — these are reshaping every industry.',
    body2: 'Why it matters: AI/ML is not the future — it\'s the present. Your Python foundation leads directly here. Understanding ML models and neural networks will be a core engineering skill within a decade. Building AI-powered tools is the next frontier.',
    chips: ['Neural networks', 'Data science', 'Python-native', 'Industry-defining']
  },
  cybersecurity: {
    icon: '🔐', title: 'Cybersecurity Foundations', tag: 'ROADMAP · SECURITY · ETHICAL HACKING',
    body: 'Cybersecurity is about understanding how systems can be broken in order to build them safer. Cryptography, network security, authentication, secure coding, and ethical hacking are all part of this.',
    body2: 'Why it matters: Every application you build needs to be secure. Breaches cost millions and hurt real people. Understanding attack vectors, input validation, and encryption makes you a more responsible and complete developer.',
    chips: ['Cryptography', 'Secure coding', 'Ethical hacking', 'High demand']
  }
};

document.querySelectorAll('.skill-item[data-skill]').forEach(item => {
  function trigger() { const d = skillData[item.dataset.skill]; if (d) openModal(d); }
  item.addEventListener('click', trigger);
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
});

/* ══════════════════════════════════════════
   INTEREST MODALS
══════════════════════════════════════════ */
const interestData = {
  calisthenics: {
    icon: '💪', title: 'Calisthenics', tag: 'DISCIPLINE · RESILIENCE · CONSISTENCY',
    body: 'I train calisthenics not just to build the body, but to build the mind. The discipline required to show up, push through failure, and improve incrementally mirrors everything I believe about learning and building.',
    body2: 'Every rep is a system in motion — input, feedback, adaptation. The same loop I run with code. Physical and mental discipline compound each other.',
    chips: ['Discipline', 'Resilience', 'Consistency', 'Self-mastery']
  },
  swimming: {
    icon: '🏊', title: 'Swimming', tag: 'ENDURANCE · RHYTHM · MENTAL CLARITY',
    body: 'Swimming is meditation in motion. The rhythm of strokes, the silence underwater, the demand for sustained endurance — it teaches you to be comfortable in discomfort.',
    body2: 'A skill I\'m actively building toward. The best challenges are the ones you choose deliberately, knowing they will reshape how you think and move.',
    chips: ['Endurance', 'Rhythm', 'Mental clarity', 'Patience']
  },
  boxing: {
    icon: '🥊', title: 'Boxing', tag: 'FOCUS · STRATEGY · COMPOSURE',
    body: 'Boxing is chess at full speed. Every movement is intentional. It demands composure under pressure, strategic thinking in real-time, and controlled power — never wasted energy.',
    body2: 'Qualities I bring into problem-solving. An aspiration that fuels my drive for focused, measured growth — on the mat and at the keyboard.',
    chips: ['Focus', 'Strategy', 'Composure', 'Controlled power']
  },
  guitar: {
    icon: '🎸', title: 'Guitar', tag: 'CREATIVITY · EXPRESSION · PATIENCE',
    body: 'Music is a different kind of system — built on feeling as much as structure. Guitar reminds me that not everything needs to be optimised. Some things just need to be felt.',
    body2: 'Creativity is the counterbalance to pure logic. I need both to build anything worth remembering. Guitar teaches patience in a way that coding rarely does.',
    chips: ['Creativity', 'Expression', 'Patience', 'Flow state']
  }
};

document.querySelectorAll('.int-card[data-key]').forEach(card => {
  function trigger() { const d = interestData[card.dataset.key]; if (d) openModal(d); }
  card.addEventListener('click', trigger);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
});

/* ══════════════════════════════════════════
   PERSONALITY.EXE TERMINAL
══════════════════════════════════════════ */
const termBody  = document.getElementById('term-body');
const termInput = document.getElementById('t-input');

const cmds = {
  help: [
    '┌────────────────────────────────────────┐',
    '│  Available commands:                    │',
    '│  help       — show this menu            │',
    '│  values     — core principles           │',
    '│  mindset    — how I think               │',
    '│  status     — current operating mode    │',
    '│  fun-fact   — something unexpected      │',
    '│  clear      — clear the terminal        │',
    '└────────────────────────────────────────┘'
  ],
  values: [
    '> Loading values.json...',
    '  [01] Discipline over motivation',
    '  [02] Systems thinking before execution',
    '  [03] Build the body AND the mind',
    '  [04] Respect every craft and craftsperson',
    '  [05] Consistency is the highest form of talent',
    '  [06] Simplicity is the ultimate sophistication'
  ],
  mindset: [
    '> Accessing mindset_core.db...',
    '  → Trains discipline daily through calisthenics',
    '  → Obsessed with systems and optimisation',
    '  → Believes learning compounds over time — like interest',
    '  → Future engineer, lifelong student',
    '  → "Excellence is built, not born."',
    '  → Still building. Still curious. Always improving.'
  ],
  status: [
    '> Checking system status...',
    '  [MODE]      : LEARN → BUILD → REFINE → REPEAT',
    '  [FOCUS]     : JavaScript + Backend Fundamentals',
    '  [PHYSICAL]  : Calisthenics routine — active',
    '  [CURIOSITY] : RUNNING ✓',
    '  [DISCIPLINE]: COMPOUNDING ↑'
  ],
  'fun-fact': [
    '> Querying fun_facts.db...',
    '  → Grew up in a village before discovering technology',
    '  → Compiled this portfolio after 47 failed attempts',
    '  → Believes bad UI is a moral failing',
    '  → 0% patience for unnecessary complexity',
    '  → Currently debugging 5 things simultaneously',
    '  → Thinks calisthenics and coding share the same core loop'
  ]
};

function addTermEl(html, cls, ms = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = cls;
      el.innerHTML = html;
      termBody.insertBefore(el, termBody.querySelector('.t-input-row'));
      termBody.scrollTop = termBody.scrollHeight;
      resolve();
    }, ms);
  });
}

async function runCmd(raw) {
  const cmd = raw.trim().toLowerCase();
  await addTermEl(`<span class="tp">abhay@system:~$</span> ${raw}`, 'tl');

  if (cmd === 'clear') {
    [...termBody.children].filter(n => !n.classList.contains('t-input-row')).forEach(n => n.remove());
    return;
  }
  if (cmds[cmd]) {
    for (let i = 0; i < cmds[cmd].length; i++) await addTermEl(cmds[cmd][i], 'to', i * 70);
  } else if (cmd !== '') {
    await addTermEl(`command not found: <span style="color:#ff9500">"${cmd}"</span> — type <span style="color:#22C55E">help</span>`, 'te');
  }

  await delay(100);
  termBody.scrollTop = termBody.scrollHeight;
}

const cmdHistory = [];
let histIdx = -1;

termInput.addEventListener('keydown', async e => {
  if (e.key === 'Enter') {
    const val = termInput.value;
    if (val.trim()) { cmdHistory.unshift(val); histIdx = -1; }
    termInput.value = '';
    termInput.disabled = true;
    await runCmd(val);
    termInput.disabled = false;
    termInput.focus();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (histIdx < cmdHistory.length - 1) { histIdx++; termInput.value = cmdHistory[histIdx]; }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (histIdx > 0) { histIdx--; termInput.value = cmdHistory[histIdx]; }
    else { histIdx = -1; termInput.value = ''; }
  }
});

/* ══════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════ */
const cfEl    = document.getElementById('cf');
const sendBtn = document.getElementById('send-btn');
const sendTxt = document.getElementById('send-txt');
const sendIco = document.getElementById('send-ico');
const formOk  = document.getElementById('form-ok');

cfEl.addEventListener('submit', async e => {
  e.preventDefault();
  sendTxt.textContent = 'PROCESSING...';
  sendIco.textContent = '⟳';
  sendBtn.disabled = true;
  try {
    const res = await fetch(cfEl.action, { method: 'POST', body: new FormData(cfEl), headers: { Accept: 'application/json' } });
    if (res.ok) { cfEl.style.display = 'none'; formOk.classList.add('show'); }
    else throw new Error();
  } catch {
    sendTxt.textContent = 'ERROR — TRY AGAIN';
    sendIco.textContent = '→';
    sendBtn.disabled = false;
  }
});

/* ══════════════════════════════════════════
   NAV
══════════════════════════════════════════ */
const navHam   = document.getElementById('nav-ham');
const navLinks = document.getElementById('nav-links');

navHam.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navHam.setAttribute('aria-expanded', String(open));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => { navLinks.classList.remove('open'); navHam.setAttribute('aria-expanded', 'false'); });
});

/* ══════════════════════════════════════════
   SCROLL — fade-in + active nav + scroll-up
══════════════════════════════════════════ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('vis'); });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fi').forEach(el => io.observe(el));

const scrollUpBtn = document.getElementById('scroll-up');
window.addEventListener('scroll', () => {
  scrollUpBtn.classList.toggle('visible', window.scrollY > 500);
  let current = '';
  document.querySelectorAll('section[id]').forEach(s => { if (window.scrollY >= s.offsetTop - 90) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => { a.classList.toggle('active', a.getAttribute('href') === '#' + current); });
}, { passive: true });

scrollUpBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
