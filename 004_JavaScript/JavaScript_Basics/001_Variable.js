//In JavaScript, you can create variables using three different keywords: var, let, and const. These keywords have different scoping and mutability characteristics


// Three wAys to create variable

// #1 --var--Global-Scoped Variables  and can be re declared in same scope

console.log("var");
var a = 10;
console.log(a);

a = 20;
console.log(a);

{
  var a = 30;
}
console.log(a);

// #2 - Let--Block-Scoped Variables and can not be redeclared in same scope but can be updated

console.log("Let");
let b = 10;
console.log(b);

// let b = 20; - Error
b = 20;
console.log(b);

{
  let ba = 40;
  console.log(ba);
}
// console.log(ba); - Error

// #3 const --Block-Scoped Constants and can not be re declared or can not be updated
console.log("const");

const c = 10;
console.log(c);

// c = 20; //Error
console.log(c);
