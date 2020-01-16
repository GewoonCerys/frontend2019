var hamburger = document.querySelector('.hamburger');
var line = document.querySelector('.line');
var sidenavigation = document.querySelector('.sidenavigation');
// Add an eventListener to our hamburger, the event we are listening for is a 'click'.
// When the 'click' event is fired, we run our animateHamburger function
hamburger.addEventListener('click', animateHamburger);
// Our animateHamburger function simple toggles the class active on our hamburger and navigation elements

function animateHamburger() {
  hamburger.classList.toggle('active');
  sidenavigation.classList.toggle('active');
};
