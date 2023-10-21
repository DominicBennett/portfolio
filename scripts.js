//debug function to get image names and log to console
function logImages() {
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        console.log('image ' + i + ' ' + getImageName(images[i].src));
    };
}

//returns the part of string after the supplied pattern
const getImageName = (image) => image.slice(image.indexOf('o/')+1);



