In JavaScript, functions are blocks of reusable code that can be defined and called to perform specific tasks

//#1-Function Declaration: You can declare a function using the function keyword  followed by a name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
//function to return square of a number
function square(number) {
  return number * number;
}

function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Alice"); // Calls the greet function with the argument "Alice"




//#2-Function Assignment --------------------------------------------------------------------------------------------
//a-Named function Asssignment
let add = function addTwoNumbers(a,b)          // a and b are parameters
{
    let sum = a+b;
    return sum; 
}
console.log(add(6,7));    // 6 and 7 are arguments

//b-Anonymous function Assignment 
let add = function (a,b)
{
    let sum = a+b;
    return sum; 
}

console.log(add(8,8));   

//c-Arrow Function Assignment
let add = (a,b) =>
{
    let sum = a+b;
    return sum; 
}

let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
console.log(add(num1,num2));   





