'use strict'

let nav = document.querySelector('.header-nav-container');
let burgerButton = document.querySelector('.burger');
let headerHeight = document.querySelector('.l-header').offsetHeight;

function toggleSidebarNav () {
  nav.classList.toggle('nav-is-shown');
  nav.style.top = headerHeight + 'px';
  nav.style.left = '0';
}

burgerButton.addEventListener('click', toggleSidebarNav);
window.addEventListener('resize', function(e) {
  if (window.clientWidth > 752) {
    nav.style.display = 'block';
  }
});
// On every change of max width, look if the max width
//is 758px or below then hide the nav bar and put
// in the burger button with onclick triggers
