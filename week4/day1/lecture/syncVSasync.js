// Synchronus vs Asynchronus

var num1 = 15;
var num2 = 20;

// Async
setTimeout(function(){
    console.log('SetTimeout Async', num1);
},1000)



// Synchronus
function sayHi() { 
    var total = 0;
    for (let num = 0; num < 10; num++) {
        total+=num
    }
    console.log("Happy Thursday from synchronus function", total);
}

sayHi(); //Stops here in synchronus programming

console.log("Line 24:",num1, num2);

console.log("Line 26:",num1+num2);


