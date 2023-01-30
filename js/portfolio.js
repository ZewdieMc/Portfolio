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

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    navLi.forEach((li) => {
      li.classList.remove('active');
      if (li.classList.contains(current)) {
        li.classList.add('active');
      }
    });
  });
}, false);
