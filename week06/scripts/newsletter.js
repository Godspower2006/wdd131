// Handles the newsletter signup: validation, localStorage, confirmation, and count.
// Uses multiple functions, DOM manipulation, conditional branching, objects/arrays, template literals.

// Utility: get element by id
const $id = (id) => document.getElementById(id);

// Retrieve stored subscribers (array) or empty array
function getSubscribers() {
  return JSON.parse(localStorage.getItem('subscribers') || '[]');
}

// Save a subscriber object to localStorage
function saveSubscriber(sub) {
  const list = getSubscribers();
  list.push(sub);
  localStorage.setItem('subscribers', JSON.stringify(list));
  localStorage.setItem('subscriberCount', String(list.length));
}

// Update the subscriber count display
function updateSubscriberCount() {
  const cnt = parseInt(localStorage.getItem('subscriberCount') || '0', 10);
  const el = $id('subscriber-count');
  if (el) el.textContent = `${cnt}`;
}

// Simple email pattern check (not exhaustive)
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Show a short status message (accessible)
function showMessage(text, type = 'success') {
  const msg = $id('signup-message');
  if (!msg) return;
  msg.textContent = `${text}`;
  msg.className = type === 'error' ? 'message error' : 'message success';
  // clear after 5s
  setTimeout(() => {
    if (msg) msg.textContent = '';
  }, 5000);
}

// Build a subscriber object from form data (uses template literals for strings)
function buildSubscriberObject(form) {
  const name = form.querySelector('#full-name').value.trim();
  const email = form.querySelector('#email').value.trim();
  const frequency = form.querySelector('input[name="frequency"]:checked')?.value || 'weekly';
  // gather checkboxes with name "topics"
  const topics = Array.from(form.querySelectorAll('input[name="topics"]:checked')).map(cb => `${cb.value}`);
  const message = form.querySelector('#comments').value.trim();
  return {
    name: `${name}`,
    email: `${email}`,
    frequency: `${frequency}`,
    topics,
    message: `${message}`,
    signedAt: new Date().toISOString()
  };
}

// Form submit handler
function handleSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const email = form.querySelector('#email').value.trim();
  if (!email || !isValidEmail(email)) {
    showMessage('Please enter a valid email address.', 'error');
    form.querySelector('#email').focus();
    return;
  }

  const subscriber = buildSubscriberObject(form);

  // Optional: Prevent duplicate email signup (example of conditional branching)
  const existing = getSubscribers().some(s => s.email.toLowerCase() === subscriber.email.toLowerCase());
  if (existing) {
    showMessage(`You're already subscribed with ${subscriber.email}.`, 'error');
    return;
  }

  saveSubscriber(subscriber);
  updateSubscriberCount();

  const displayName = subscriber.name || 'friend';
  showMessage(`Thanks, ${displayName}! You're now subscribed (${subscriber.frequency}).`);
  form.reset();
}

// Hook up listeners on DOM ready
function init() {
  const form = $id('signup-form');
  if (form) form.addEventListener('submit', handleSubmit);

  // Menu toggle (small screens) - small UX enhancement
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    const nav = document.getElementById('primaryNav');
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (nav) nav.classList.toggle('open');
    });
  }

  updateSubscriberCount();
}

// start
document.addEventListener('DOMContentLoaded', init);
