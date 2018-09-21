'use strict'

let nav = document.querySelector('.header-nav-container');
let burgerButton = document.querySelector('.burger');

function toggleSidebarNav () {
  nav.classList.toggle('nav-is-shown');
}

burgerButton.addEventListener('click', toggleSidebarNav);

// On every change of max width, look if the max width
//is 758px or below then hide the nav bar and put
// in the burger button with onclick triggers
