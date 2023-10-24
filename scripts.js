//debug function to get image names and log to console
function logImages() {
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        console.log('image ' + i + ' ' + getImageName(images[i].src));
    };
}

//returns the part of string after the supplied pattern
const getImageName = (image) => image.slice(image.indexOf('o/')+1);

var body = document.querySelector('body');
var p = document.querySelector('p');
var theme ='day';

function changeTheme() {
    if (theme === 'day') {
        //set theme to night
        body.style.backgroundColor = 'black';
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = 'black';
            paragraphs[i].style.color = 'white';
        }
        theme = 'night';
    } else {
        //set theme to day
        body.style.backgroundColor = 'white';
        for (var i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.backgroundColor = 'white';
            paragraphs[i].style.color = 'black';
        }
        theme = 'day';
    }
}

var themeButton = document.getElementById('themeButton');
var paragraphs = document.querySelectorAll('p');

themeButton.addEventListener('click', changeTheme);



