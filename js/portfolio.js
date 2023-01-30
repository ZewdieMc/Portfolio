document.addEventListener('DOMContentLoaded', () => {
  const humberger = document.querySelector('#mobile-menu');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('#close-menu');
  const menuLinks = document.querySelectorAll('.menu-content a');

  const toggleMobileMenu = () => menu.classList.toggle('hidden');

  humberger.addEventListener('click', toggleMobileMenu);
  closeMenu.addEventListener('click', toggleMobileMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', toggleMobileMenu);
  });

  const sections = document.querySelectorAll('section');
  const navLi = document.querySelectorAll('nav ul li a');

  window.onscroll = (() => {
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect().y;
      if (rect < window.innerHeight - 200) {
        navLi.forEach((section) => section.classList.remove('active'));
        navLi[i].classList.add('active');
      }
    });
  });
}, false);
