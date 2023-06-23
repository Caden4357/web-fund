// grab the hero image element
var heroImage = document.querySelector('.hero-img')

// an array of images to cycle through (the path to the images)

var images = ['./images/blue-shoes.jpg', './images/nikes.jpg', './images/shoes.jpg'];


var idx = 1;
setInterval(function() {
    // console.log(images[idx]);
    // console.log(heroImage.src);

    if(idx == images.length) {
        idx = 0;
    }
    heroImage.src = images[idx];
    idx++;
}, 3000)


