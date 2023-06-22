// arrays index based starting at 0
var arr = [1,2,3,4,5];
// console.log(arr[0]); // 1
// console.log(arr[1]); // 2

// array methods 
// console.log(arr.length);// 5
// console.log(arr[arr.length-1]); // 5
// arr.push(6);
// console.log(arr);



for(var idx = 0; idx < arr.length; idx++){
    console.log(arr[idx]);
}



// for(var i = arr.length-1; i >= 0; i--){
//     console.log(arr[i]);
// }















// objects made up of key value pairs
var juli = {
    name: 'Juli',
    age: 25,
    location: 'Burbank',
    favoriteLanguage: 'JavaScript',
    isCool: true,
}
console.log(juli.name);
console.log(juli.age);
console.log(juli.favoriteLanguage);




var instructor = {
    name: 'Caden',
    age: 25,
    location: 'Seattle',
    favoriteLanguage: 'JavaScript',
    isCool: true,
    hobbies: ['coding', 'playing guitar', 'hiking'],
    lectureSchedule:{
        week1:{
            tues: 'HTML',
            wed: 'CSS',
            thurs: 'Flexbox',
        },
        week2:{
            tues: 'JS Fundamentals',
            wed: 'JS in the DOM',
            thurs: 'Belt prep',
        },
        week3:{
            tues: 'GitHub',
            wed: 'Algos',
            thurs: 'Bonus project',
        },
    }
}
console.log(instructor.hobbies[1]);
console.log(instructor.lectureSchedule.week2.wed);

// conditional statements
var highSchoolGrad = false;

if (highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry you must graduate high school or receive your GED first');
}

var weekday = "Monday"

if (weekday === "Friday"){
    console.log("Woohoo its the weekend!");
}
else if(weekday === "Saturday"){
    console.log("One more day to relax!");
}
else{
    console.log("Time to work!");
}







// functions 
// function declaration
function addNums(num1, num2){
    return num1 + num2;
}
console.log(addNums(5,10));


// ? Square nums in an array 
// write a function that takes in an array of numbers 
// and squares each number in the array
// return the array with the squared numbers
function squareNums(arr){
    for(var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx] * arr[idx]
    }
    return arr
}
console.log(squareNums([1,2,3,4]));


// ? square only even nums in an array
function squareEvenNums(arr){
    for(var idx = 0; idx < arr.length; idx++){
        if(arr[idx] % 2 !== 0){
            arr[idx] = arr[idx] * arr[idx]
        }
    }
    return arr
}
console.log(squareEvenNums([1,2,3,4]));