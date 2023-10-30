/*Tuples: Tuples are arrays with fixed lengths and element types at specific positions 
          Tuples combine elements of different types in a fixed order, and TypeScript enforces that the elements must match the specified types and positions.  */

  //. Tuple Declaration: we declare a tuple by specifying the types of its elements within square brackets, where each type corresponds to an element's position in the tuple.
          let person: [string, number, boolean] = ["Alice", 30, true];

  // Accessing Tuple Elements:we can access tuple elements using array-like indexing.
         let name: string = person[0];  // "Alice"
         let age: number = person[1];   // 30
         let isStudent: boolean = person[2];  // true

 //Type Safety: Tuples provide strong type safety, ensuring that elements are of the correct type at their respective positions.
        person[0] = 42; // Error: Type '42' is not assignable to type 'string'

 // Fixed Length: Tuples have a fixed length, meaning we cannot add or remove elements after the tuple is created.
        person.push("Bob"); // Error: Property 'push' does not exist on type '[string, number, boolean]'

  //Destructuring Tuples: we can destructure tuple elements into separate variables for easier access.
       let [name, age, isStudent] = person;
       console.log(name);       // "Alice"
       console.log(age);        // 30
       console.log(isStudent);  // true

 //Optional Elements: we can make tuple elements optional by using the ? modifier.
       let optionalTuple: [string, number?] = ["Alice"];

 // Rest Elements: we can use a rest element to collect multiple values into a tuple. In this example, the ...number[] syntax allows you to store multiple numbers in the tuple.
      let numbers: [number, ...number[]] = [1, 2, 3, 4, 5];




 //Type Inference: TypeScript can infer the types of tuple elements based on their initialization values.
          let tuple = ["Bob", 25, false]; // TypeScript infers [string, number, boolean]
