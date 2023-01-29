const humberger = document.querySelector('#mobile-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('#close-menu');
const menuLinks = document.querySelectorAll('.menu-content a');

const toggleMobileMenu = function() {
  menu.classList.toggle('hidden');  
}

humberger.addEventListener('click', toggleMobileMenu );
closeMenu.addEventListener('click', toggleMobileMenu );

menuLinks.forEach(link =>{
  link.addEventListener('click', toggleMobileMenu);
});