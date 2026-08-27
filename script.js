const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Portfolio asset links
const assetLinks = {
  'assets/Uyo_V_Alhassan_Resume.pdf': 'assets/Uyo_Alhassan_Executive_Resume.pdf',
  'assets/Uyo_Alhassan_Wazuh_Detection_Engineering_Case_Study.pdf': 'assets/Uyo_Alhassan_Wazuh_Detection_Engineering_Case_Study_v3.pdf'
};

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute('href');
  if (assetLinks[href]) link.setAttribute('href', assetLinks[href]);
});

// Use the professional email shown on the current executive resume.
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) emailLink.setAttribute('href', 'mailto:alhassanuyovivian@gmail.com');

// Replace the abstract About panel with the professional headshot.
const aboutAccent = document.querySelector('.about-accent');
if (aboutAccent) {
  aboutAccent.className = 'about-photo';
  aboutAccent.removeAttribute('aria-hidden');
  aboutAccent.innerHTML = '<img src="assets/uyo-alhassan-headshot.jpeg" alt="Professional headshot of Uyo V. Alhassan" />';
}

// Headshot styling, kept here so the live site can use the new asset without changing the core stylesheet.
const portfolioAssetStyles = document.createElement('style');
portfolioAssetStyles.textContent = `
  .about-photo {
    position: relative;
    max-width: 430px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 24px;
    background: linear-gradient(145deg, #eaf4fb, #d5e8f5);
    border: 1px solid #c9ddea;
    box-shadow: 0 18px 50px rgba(8, 26, 51, .10);
  }
  .about-photo::after {
    content: '';
    position: absolute;
    inset: auto -12px -12px auto;
    width: 90px;
    height: 90px;
    border-right: 3px solid #2f8fd5;
    border-bottom: 3px solid #2f8fd5;
    border-radius: 0 0 22px 0;
    pointer-events: none;
  }
  .about-photo img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: center 28%;
    border-radius: 16px;
  }
  @media (max-width: 900px) {
    .about-photo { max-width: 390px; }
  }
`;
document.head.appendChild(portfolioAssetStyles);
