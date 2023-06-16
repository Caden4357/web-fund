// console.log('Running');
var form = document.querySelector('form');
var searchInput = document.querySelector('input');
var cart = document.querySelector('span');
// console.log(searchInput);
form.addEventListener('submit', function(){
    alert(`You searched for ${searchInput.value}`)
})


// function discountCode(){
//     alert("Use discount code Enchanted to get 20% off")
// }
// setTimeout(discountCode, 10000)


// setTimeout(function (){
//     alert("Use discount code Enchanted to get 20% off")
// }, 10000)



function increaseCart(){
    // cart.innerText++;
    var cartAmount = parseInt(cart.innerText);
    cart.innerText = cartAmount+=1
}