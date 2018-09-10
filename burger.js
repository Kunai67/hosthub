'use strict'

let header = document.querySelector('.l-header');
let headerHeight = header.offsetHeight;
let nav = document.querySelector('.header-nav');
let banner = document.querySelector('.l-banner');
let bannerPosition = banner.getBoundingClientRect().top;
let burgerButton = document.querySelector('.burger');
let navIsShown = false;

function toggleSidebarNav () {
  if (navIsShown == false) {
    header.style.position = 'absolute';
    nav.style.display = 'block';
    navIsShown = true;
  } else if (navIsShown == true) {
    header.style.position = 'relative';
    nav.style.display = 'none';
    navIsShown = false;
  }
}

burgerButton.addEventListener('click', toggleSidebarNav);

// On every change of max width, look if the max width
//is 758px or below then hide the nav bar and put
// in the burger button with onclick triggers
