console.log("Running");
var elementYear = document.querySelector('.year')
console.log(elementYear);

// function customFunc(){
//     alert('From Main.js')
// }

function changeButtonText(element){
    console.log(element.innerText);
    element.innerText = 'Clicked'
    // element.remove()
}
function increaseNum(element){
    console.log(typeof(element.innerText));
    var year = parseInt(element.innerText)
    console.log(typeof(year));
    element.innerText = year+=1
}
function increaseYear(){
    var year = parseInt(elementYear.innerText)
    elementYear.innerText = year+=1
}