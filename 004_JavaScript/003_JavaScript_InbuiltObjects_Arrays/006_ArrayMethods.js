

//#1-Length--------------------------------------------------------------------------------------------------------
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits1.length;  //4



//#2-reverse--------------------------------------------------------------------------------------------------------
let first = [1, 2, 3, 4];
console.log(first);
let reverse = first.reverse();
console.log(reverse);




//#3-filter - uses callback function / Arrow function-----------------------------------------------------------------

const ages = [32, 33, 16, 40];
const result = ages.filter(function checkAdult(age) {
  return age >= 18;
});


let arr = [1,23,53,5,6,53,5,4,43,45,7,48,67,8,7,4,6,7,8,5];
console.log(arr);
// Filter which values are greater than 4 and divde by 4
let ans = arr.filter(value => value > 4 && value % 4 === 0);
console.log(ans);






//#4-map() creates a new array from calling a function for every array element.------------------------------------------
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)

//using callback function ( A function that is called for each element in the array, )
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
function myFunction(num) {
  return num * 10;
}


//#5-sort--------------------------------------------------------------------------------------------------------------
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.sort();

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.sort();
fruits3.reverse();

//Ascending order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

//Decending order
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a, b){return b-a});




//#6--Chaining --Chaining in JavaScript arrays involves applying multiple array methods in sequence to an array----------------------
let arr = [1,2,3,4,5,6];
let chain = arr.filter(val => val > 2).map(num => num*num).filter(val => val&1);
console.log(chain);




//#7- reduce--reduce() method is used to apply a function to each element of an array and reduce the array to a single value.----------------
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)

//syntax--- array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//accumulator: The accumulated result.
//currentValue: The current element being processed.

