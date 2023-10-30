

// Variable Declaration-Variable Declarations: In TypeScript, we can declare variables using the let, const, or var keywords, similar to JavaScript.
let x = 10;
const y = 20;

let sum;
const title = 'Nit warangal ';

// Basic Variable Types - Type Annotations -- TypeScript allows you to explicitly specify the data type of a variable using a type annotation. 
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Amit';

//The template string allows us to embed variables within the string using ${}
let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);


/*------------------------------------------------------------------Benifits of typescipt over js -------------------------------------------------------------

 1. TypeScript enhances code maintainability through rigorous type checking.
 2. TypeScript provides intelligent code suggestions and autocompletion, improving development efficiency.  */





/*--------------------------------------------------------------------Typescipt -Special -Types------------------------------------------------------------------- */

// 1. null and undefined: These types represent the values null and undefined, respectively. They are often used to indicate the absence of a value.
       let n: null = null;
       let u: undefined = undefined;

       let isNew: boolean = null;
       let myName: string = undefined;



//2. type: any -- any is a type that disables type checking and effectively allows all types to be used.
    // Example without anyGet your own TypeScript Server
       let u = true;
       u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
       Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

   //Example without anyGet your own TypeScript Server
      let u = true;
      u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
      Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.



//3. Type: unknown :-- unknown is a similar, but safer alternative to any. TypeScript will prevent unknown types from being used
      //unknown can hold values of any type, just like any. However, unlike any, you cannot directly operate on values of type unknown without narrowing the type first through type checking or type assertions.
      let userInput: unknown;
      let userName: string;

      userInput = 42; // Valid assignment

     // We need to check the type before assigning it to another variable
    if (typeof userInput === 'string') {
      userName = userInput; // Valid assignment
   } else {
      userName = 'Default'; // Handle the case when userInput is not a string
   }

//Note:userInput is assigned a value of type unknown, and before we can assign it to userName, we must perform a type check to ensure it's a string. This additional type safety prevents potential runtime errors caused by incompatible types.


//4.Type: never : never effectively throws an error whenever it is defined.
    let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

//5.Union Types: Union types allow a variable to have one of multiple types.
    let value: number | string;
    value = 42; // Valid
    value = 'Hello'; // Valid


//6. Intersection Types: Intersection types combine multiple types into one.
    type Person = { name: string };
    type Address = { address: string };
    type Contact = Person & Address;

   const contactInfo: Contact = {
    name: 'John',
    address: '123 Main St',
  };


//7. Type Assertions: Type assertions allow you to tell the TypeScript compiler to treat an expression as a different type.
     let someValue: any = 'Hello';
     let strLength: number = (someValue as string).length;





