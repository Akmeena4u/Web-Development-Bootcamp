/*In TypeScript, arrays are a fundamental data structure that allows you to store and manipulate a collection of values. TypeScript provides strong typing for arrays, which means you can specify the types of elements that the array can hold. 
*/


//. Array Declaration:
    let numbers: number[] = [1, 2, 3, 4, 5];
    let number1: Array<number> = [1, 2, 3];
    let names: string[] = ["Alice", "Bob", "Charlie"];

// Readonly Arrays: You can declare an array as read-only using the readonly keyword, which prevents modifications to the array after initialization.
    let readOnlyArray: readonly number[] = [1, 2, 3];


//Type Inference :- TypeScript can infer the type of an array if it has values.
  const numbers = [1, 2, 3]; // inferred to type number[]
  numbers.push(4); // no error
  numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


//Array Type Union: we can create an array that holds values of different types using a union type.
  let mixedArray: (number | string)[] = [1, "two", 3, "four"];




// Iterating Through Arrays:we can use for...of loops or array methods to iterate through arrays safely.
  let numbers: number[] = [1, 2, 3, 4, 5];
  for (let num of numbers) {
  console.log(num);
  }


// Array Methods: TypeScript allows you to use array methods such as push, pop, forEach, map, and more. These methods are type-safe when used with typed arrays.
   let numbers: number[] = [1, 2, 3];
   numbers.push(4); // Valid operation
   numbers.push("five"); // Error: Argument of type '"five"' is not assignable to parameter of type 'number'



