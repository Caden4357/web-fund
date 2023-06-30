// grab the hero image element
var heroImage = document.querySelector('.hero-img')
var hamburgerIcon = document.querySelector('.nav-ham')
var dropdownLinks = document.querySelector('.dropdown-links')
// an array of images to cycle through (the path to the images)

var images = ['./images/blue-shoes.jpg', './images/nikes.jpg', './images/shoes.jpg'];

hamburgerIcon.addEventListener('click', displayDropdown)

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

// check if window is resized to a certain size
window.addEventListener('resize', function () {
    if (window.innerWidth > 1150){
        dropdownLinks.style.display = 'none';
    }
})

function displayDropdown(){
    // we want to check if the mobile-links are being displayed if they are we want to hide them if theyre not we want to display them 
    console.log(dropdownLinks.style.display);
    console.log(dropdownLinks);
    if(dropdownLinks.style.display === 'none'){
        dropdownLinks.style.display = 'block'
    }else{
        dropdownLinks.style.display = 'none'
    }
}

