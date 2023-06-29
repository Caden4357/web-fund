console.log('running');
// we need variables to store: 2 numbers, operand & possibly the result
let display = document.querySelector('#display');
console.log(display);
let num1 = '';
let num2 = '';
let operator = '';
let result;
// looks like we have 4 functions to make 
// 1.) press(num) => store the numbers to preform said operation on 
function press(num){
    num1 += num
    display.innerText = num1;
}
// 2.) setOP(operand) => sets the operand 
function setOP(operand){
    operator = operand
    num2 = num1; 
    num1 = ''
}
// 3.) calculate() => calculates the result
// check what operator the user clicked on (if statement / conditional)
// depending on the operator perform the equation 
// store the answer in result 
// change the innertext of display to be result 
function calculate(){
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    if(operator === '+'){
        result = n1 + n2
    }
    else if(operator === '-'){
        result = n2 - n1
    }
    else if(operator === '*'){
        result = n1 * n2
    }
    else if(operator === '/'){
        result = n2 / n1
    }
    display.innerText = result;
}

// 4.) clear the calculator 
function clr(){
    num1 = '';
    num2 = '';
    operator = '';
    display.innerText = '0';
}