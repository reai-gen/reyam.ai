const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const socialLinks = Array.from(document.querySelectorAll('.footer-links .social-icon-link'));

if (socialLinks.length) {
  const footerLinks = socialLinks[0].closest('.footer-links');
  const footerGrid = footerLinks?.parentElement;

  if (footerLinks && footerGrid) {
    const footerActions = document.createElement('div');
    footerActions.style.cssText = 'display:flex; flex-direction:column; align-items:flex-start; gap:18px;';

    const socialSection = document.createElement('div');
    socialSection.style.cssText = 'display:flex; flex-direction:column; gap:10px;';

    const socialLabel = document.createElement('span');
    socialLabel.textContent = 'Stay updated on social media';
    socialLabel.style.cssText = 'font-weight:700; color:#475569;';

    const socialIcons = document.createElement('div');
    socialIcons.style.cssText = 'display:flex; gap:10px;';

    footerGrid.insertBefore(footerActions, footerLinks);
    footerActions.appendChild(footerLinks);
    socialSection.appendChild(socialLabel);
    socialLinks.forEach((link) => socialIcons.appendChild(link));
    socialSection.appendChild(socialIcons);
    footerActions.appendChild(socialSection);
  }
}
