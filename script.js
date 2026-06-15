const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const calendlyUrl = 'https://calendly.com/info-reyam-ai/30min';

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (formNote) {
      formNote.textContent = 'Redirecting you to Calendly to choose an available time.';
    }

    window.location.href = calendlyUrl;
  });
}
