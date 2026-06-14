const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const bookingForm = document.getElementById('bookingForm');
const formNote = document.getElementById('formNote');
const yourEmail = 'your-email@example.com'; // Replace with your email address

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const subject = encodeURIComponent('AI Career Mentorship Booking Request');
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\n` +
    `Email: ${data.get('email')}\n` +
    `Stage: ${data.get('stage')}\n\n` +
    `Message:\n${data.get('message')}`
  );

  if (yourEmail === 'your-email@example.com') {
    formNote.textContent = 'Update script.js with your email address, or connect this form to Calendly, Formspree, or Netlify Forms.';
    return;
  }

  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
});
