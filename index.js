var cards = document.querySelector('#others-cards');
var menu = document.querySelector('#menu');
var close = document.querySelector('#menu-close');

// menu background opacity
var opacity = "0.75";
var opacityText = "#999999";
var header = document.querySelector('header');
var spotifyLogo = document.querySelector('#spotify-logo');
var section = document.querySelector('#main-section');
var sectionH1 = document.querySelector('#main-section > h1');
var sectionH3 = document.querySelector('#main-section > h3');
var buttonStart = document.querySelector('#start-1');
var buttonPlans = document.querySelector('#plans');
var sectionP = document.querySelector('#main-section > p');
var terms = document.querySelector('#terms');
var body = document.querySelector('body');
var circle1 = document.querySelector('#circle-1');
var circle2 = document.querySelector('#circle-2');
var circle3 = document.querySelector('#circle-3');
var circle4 = document.querySelector('#circle-4');

var instagram = document.getElementById('instagram-logo');
var twitter = document.getElementById('twitter-logo');
var facebook = document.getElementById('facebook-logo');

function showMenu() {
    menu.style.display = "flex";
    close.style.display = "block";
    body.style.overflow = "hidden";

    // turn on menu background opacity
    header.style.background = "rgba(0, 0, 0, " + opacity  + ")";
    spotifyLogo.style.opacity = "0.6";
    section.style.background = "#06182d";
    sectionH1.style.color = opacityText;
    sectionH3.style.color = opacityText;
    buttonStart.style.color = opacityText;
    buttonPlans.style.background = "#06182d"; 
    buttonPlans.style.color = opacityText;
    buttonPlans.style.border = "2px solid " + opacityText;
    sectionP.style.color = opacityText;
    terms.style.color = opacityText;
    body.style.background = "rgba(0, 0, 0, " + opacity  + ")";
    circle1.style.opacity = "0.010";
    circle2.style.opacity = "0.010";
    circle3.style.opacity = "0.010";
    circle4.style.opacity = "0.010";
}

function closeMenu() {
    menu.style.display = "none";
    body.style.overflow = "auto";

    // turn off menu background opacity
    header.style.background = "black";
    spotifyLogo.style.opacity = "1";
    section.style.background = "#1d75de";
    sectionH1.style.color = "white";
    sectionH3.style.color = "white";
    buttonStart.style.color = "white";
    buttonPlans.style.background = "#1d75de"; 
    buttonPlans.style.color = "white";
    buttonPlans.style.border = "2px solid white";
    sectionP.style.color = "white";
    terms.style.color = "white";
    body.style.background = "white";
    circle1.style.opacity = "1";
    circle2.style.opacity = "1";
    circle3.style.opacity = "1";
    circle4.style.opacity = "1";
}

function showCards() {
    document.querySelector('#others-cards').style.display = "block";
}

function hideCards() {
    document.querySelector('#others-cards').style.display = "none";
}

function changeImage(id) {
    if ((id) == "instagram") {
        instagram.src = "images/instagram-logo-hover.png";
        instagram.style.filter = "none";
        }
    else if ((id) == "twitter") {
        twitter.src = "images/twitter-logo-hover.png";
        twitter.style.filter = "none";
    }
    else {
        facebook.src = "images/facebook-logo-hover.png";
        facebook.style.filter = "none";
    }
}

function originalImage(id) {
    if ((id) == "instagram") {
        instagram.src = "images/instagram-logo.png";
        instagram.style.filter = "invert(1)";
    }
    else if ((id) == "twitter") {
        twitter.src = "images/twitter-logo.png";
        twitter.style.filter = "invert(1)";
    }
    else {
        facebook.src = "images/facebook-logo.png";
        facebook.style.filter = "invert(1)";
    }
}