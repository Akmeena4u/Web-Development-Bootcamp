//In JavaScript, there are several types of function parameters that we can use depending on your needs. These parameters allow you to pass data into a function when it is called. 

//#1-Named Parameters (Positional Parameters):They are defined by name and are assigned values based on their position when calling the function.
function greet(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

greet("John", "Doe"); // Calls the greet function with named parameters






//#2-Default Parameters:Default parameters allow you to specify default values for function parameters in case the caller doesn't provide a value.
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // 5





//#Rest Parameters: Rest parameters allow you to represent an indefinite number of arguments as an array.They are denoted by an ellipsis (...) followed by a parameter name.
//Rest parameters are true arrays, so you can use array methods and the spread operator (...) with them.
function sum(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // Output: 15



let add = function addTwoNumbers(a,b,...args) 
{
    console.log(args);
    let sum = 0;
    for(let key of args)
        sum += key;
    return sum; 
}

console.log(add(1,2,3,4,5,6,7,8));   





//#4-Arguments--It contains all the arguments passed to the function, including those not explicitly named as parameters.

let add = function addTwoNumbers(a,b)
{
    // console.log(arguments);
    let sum = 0;
    for(let key of arguments)
        sum += key;
    return sum; 
}

console.log(add(1,2,3,4,5,6,7,8));   
