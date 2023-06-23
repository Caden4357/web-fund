// Scope is the context in which our variables are declared
// We can think of scope as the area where our variables are accessible
// Global scope is the outermost scope
// Global scope is the window object in the browser
// Global scope is the document object in the browser
// Global scope is the global object in node

// difference between reassigning and redeclaring
// reassigning is changing the value of a variable
// redeclaring is creating a new variable with the same name
var x = 10;
var x = 20;
x = 30;
console.log(x);

let john = 'John';
john = 'Juli';
console.log(john);

// Cannot be redclared or reassigned
const age = 25;


const ages = [21,22,30,40,58];
ages.push(60);
console.log(ages);
const juli = {
    name: 'Juli',
    age: 25,
}
juli.name = 'John';
juli.favoriteLanguage = 'JavaScript';
console.log(juli);



// function scoped
// var is function scoped
function sayHello() {
    var juli = 'Juli';
    console.log(juli);
}
sayHello();
console.log(juli);
// what is blco scope?
// block scope is the area where our variables are accessible within a block
// a block is a set of curly braces
if(true){
    let caden = 'Caden';
    console.log(caden);
}
console.log(caden);

function logNums(arr){
    let x = 10;
    for(var i = 0; i < arr.length; i++){
        let y = 20;
        // console.log(arr[i]);
        console.log(y);
    }
    console.log(y);
    // console.log(i);
}
logNums([1,2,3,4,5]);
// console.log(x);




// let and const are block scoped

// function scope is the area where our variables are accessible within a function

// function sayHello() {
//     var name = 'John';
//     console.log(name);
// }
// sayHello();
// console.log(name);

// Block scope is the area where our variables are accessible within a block
// A block is a set of curly braces
// if statements and for loops are examples of blocks

// if(true){
//     var name = 'John';
//     console.log(name);
// }
// console.log(name);

// if(true){
//     let name = 'John';
//     console.log(name);
// }
// console.log(name);






// var vs let vs const
// var is function scoped
// let and const are block scoped
// const cannot be reassigned
// let can be reassigned
// var can be reassigned
// var can be redeclared
// let cannot be redeclared
// const cannot be redeclared
// var is hoisted
// let and const are not hoisted'







// let max = 'Max';

// if(true){
//     let max = 'Bob';
//     console.log(max);// Bob
// }
// console.log(max);// Max

// let is a replacement to var 
// const is just a new way to declare variables
var max = 'Max';

if(true){
    var max = 'Bob';
    console.log(max);// Bob
}
console.log(max);// Bob