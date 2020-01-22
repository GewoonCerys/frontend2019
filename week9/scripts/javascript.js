var hamburger = document.querySelector('.hamburger');
var line = document.querySelector('.line');
var sidenavigation = document.querySelector('.sidenavigation');
var galarimage = document.getElementById('galarimage');
var pokemonimage = document.getElementById('pokemonimage');
// ik ben hier bezig met de call to action iets anders laten toen met een mouse over, maar het werkt nog niet //
var calltoaction = document.getElementById('calltoaction');


// Add an eventListener to our hamburger, the event we are listening for is a 'click'.
// When the 'click' event is fired, we run our animateHamburger function
hamburger.addEventListener('click', animateHamburger);
galarimage.addEventListener('click', changeImage);
pokemonimage.addEventListener('click', changePokemon);

// ik ben hier bezig met de call to action iets anders laten toen met een mouse over, maar het werkt nog niet //
calltoaction.addEventListener('mouseenter', changeCall);


// Our animateHamburger function simple toggles the class active on our hamburger and navigation elements
function animateHamburger() {
  hamburger.classList.toggle('active');
  sidenavigation.classList.toggle('active');
};

function changeImage() {
            var image = document.getElementById('galarimage');
            if (image.src.match("images/adventure_screenshot1")) {
                image.src = "images/adventure_screenshot2.jpg";
            }
            else {
                image.src = "images/adventure_screenshot1.jpg";
            }
        }

function changePokemon() {
            var image = document.getElementById('pokemonimage');
            if (image.src.match("images/yamper_overview")) {
                image.src = "images/wooloo_overview.png";
            }
            else {
                image.src = "images/yamper_overview.png";
            }
        }
// ik ben hier bezig met de call to action iets anders laten toen met een mouse over, maar het werkt nog niet //
function changeCall () {
    changeCall.target.style.color = "linear-gradient(to bottom, rgba(247, 81, 125, 1) 3%, rgba(255, 255, 255, 1) 75%)";
}