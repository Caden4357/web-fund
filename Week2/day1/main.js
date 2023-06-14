
// console.log("Hello World");


// * primitive data types

// * Strings
var myName = "John";
var num = "30";

// * Numbers
var myAge = 30;
// * Still a number in JS 
var pi = 3.14;

// * Booleans
var isHuman = true;

// * Math operators
// * Addition
console.log(myAge+2);
// * Subtraction
console.log(myAge-2);
// * Multiplication
console.log(myAge*2);
// * Division
console.log(myAge/2);

// * Difference between =, == & ===
// * = is an assignment operator it assigns the value on the right to the variable on the left like we have above ^^
// * == is equality operator it checks if the value on the left is equal to the value on the right
if(myAge == num){
    console.log("They are equal");
} else {
    console.log("They are not equal");
}
// * === is strict equality operator it checks if the value on the left is equal to the value on the right and if they are the same data type. We use this most of the time because we usually care about the data type being the same as well as the value.
if(myAge === num){
    console.log("They are equal");
} else {
    console.log("They are not equal");
}

// * Non primitive data types
// * Arrays are index based starting at 0
//             0 1 2 3 4    5        6
var myArray = [1,2,3,4,5, 'Caden', true];
// * You access specific elements in an array by using the index
myArray[2] = 10;
console.log(myArray[2]);


// * Objects are made up of key value pairs
var studentMacy = {
    name: "Macy",
    age: 25,
    isHuman: true,
}

// * You access specific properties in an object by using the key
// *            nameOfObject['key']
// console.log(studentMacy['name']);
// * OR        nameOfObject.key
// console.log(studentMacy.name);

// * String concatenation: combining strings together using the + operator notice how we throw variables in there and it works just fine
// console.log("Hi my name is " + studentMacy.name + " and I am " + studentMacy.age + " years old.");


// * This is a simple but practical example of how we can we can grab elements from HTML and manipulate them
var header = document.getElementById("header");
header.innerHTML = "Hello World";


// * functions
// * A function is a block of code that we can call over and over again to do a specific task or tasks
// * We can pass in parameters to a function and use them inside the function
// * We can also return values from a function

function sayHello(username){
    var username = "Caden";
    console.log("Hello " + username);
    return "Hello " + username;
}
sayHello("Caden");


// ? What is the output going to be? 
//  * for loop
//  * for (starting point; condition; increment)
for (var i = 5; i < 20; i+=5){
    console.log(i);
}
// * Answer: 5, 10, 15
