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
    footerActions.className = 'footer-actions';

    const socialSection = document.createElement('div');
    socialSection.className = 'footer-social-section';

    const socialLabel = document.createElement('span');
    socialLabel.className = 'footer-social-label';
    socialLabel.textContent = 'Stay connected';

    const socialIcons = document.createElement('div');
    socialIcons.className = 'footer-social-icons';

    footerGrid.insertBefore(footerActions, footerLinks);
    footerActions.appendChild(footerLinks);
    socialSection.appendChild(socialLabel);
    socialLinks.forEach((link) => socialIcons.appendChild(link));
    socialSection.appendChild(socialIcons);
    footerActions.appendChild(socialSection);

    const socialStyles = document.createElement('style');
    socialStyles.textContent = `
      .footer-actions { display: flex; flex-direction: column; align-items: flex-start; min-width: 320px; }
      .footer-actions .footer-links { padding-bottom: 20px; }
      .footer-social-section { width: 100%; display: flex; align-items: center; gap: 14px; padding-top: 18px; border-top: 1px solid var(--border); }
      .footer-social-label { color: #64748b; font-weight: 700; font-size: .94rem; }
      .footer-social-icons { display: flex; align-items: center; gap: 10px; }
      .footer-social-icons .social-icon-link { width: 30px; height: 30px; border: 0; border-radius: 0; background: transparent; box-shadow: none; color: #64748b; }
      .footer-social-icons .social-icon-link svg { width: 20px; height: 20px; }
      .footer-social-icons .social-icon-link:hover { color: var(--primary); transform: none; box-shadow: none; }
      @media (max-width: 840px) { .footer-actions { min-width: 0; width: 100%; } }
    `;
    document.head.appendChild(socialStyles);
  }
}
