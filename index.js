const hamburgerButton = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector('.primary-navigation');

hamburgerButton.addEventListener('click', () => {
  const visibility = primaryNavigation.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    hamburgerButton.setAttribute('aria-expanded', true);
  } else {
    primaryNavigation.setAttribute('data-visible', false);
    hamburgerButton.setAttribute('aria-expanded', false);
  }
});
