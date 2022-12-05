var cards = document.querySelector('#others-cards');

function showCards() {
    document.querySelector('#others-cards').style.display = "block";
}

function hideCards() {
    document.querySelector('#others-cards').style.display = "none";
}

function changeImage(id) {
    var instagram = document.getElementById('instagram-logo');
    var twitter = document.getElementById('twitter-logo');
    var facebook = document.getElementById('facebook-logo');

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
    var instagram = document.getElementById('instagram-logo');
    var twitter = document.getElementById('twitter-logo');
    var facebook = document.getElementById('facebook-logo');
    
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