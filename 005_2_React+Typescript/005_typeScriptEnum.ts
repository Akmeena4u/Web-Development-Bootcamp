/*Enums in TypeScript are a way to define a set of named constants or symbolic values. They provide a more readable and self-documenting way to work with values that 
  have a predefined and limited set of options.An enum is a special "class" that represents a group of constants (unchangeable variables). 


  Use Cases:
  Enums are useful when you have a limited and well-defined set of options, such as representing compass directions, days of the week, HTTP status codes, or menu choices.
  They provide self-documenting code, enhance code readability, and help prevent typos and invalid values.  

  Enums come in two flavors string and numeric. Lets start with numeric. */


 //-----------------------------------------------------------------------Numeric Enum------------------------------------------------------------------------------


  /*----------------------------------------------------------------------Enum Declaration:---------------------------------------------------------------------------
  To define an enum in TypeScript, you use the enum keyword followed by the name of the enum and a code block that contains the enum members. Each member is assigned a 
  numeric value by default, starting from 0 for the first member, and each subsequent member gets an incremented value. You can also assign specific numeric values if needed.  */

  enum Direction {
  North,  // 0
  East,   // 1
  South,  // 2
  West    // 3
}

//we can explicitly set numeric values for enum members as well:

enum Day {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}


/*--------------------------------------------------------------Using Enums:------------------------------------------------------------------------ 
  Once we've defined an enum, we can use its members as values in your code  */
 let currentDirection: Direction = Direction.East;

 //Enums in TypeScript can be thought of as objects with key-value pairs. You can access the numeric value of an enum member using its name and vice versa:
   let directionName: string = Direction[1]; // "East"
   let directionValue: number = Direction.West; // 3




/*----------------------------------------------------------2. String Enum-------------------------------------------------------------------------------
  TypeScript allows us to create string enums, where each member is of type string instead of a number. String enums are particularly useful when we need to work
  with values that are not numeric, such as API endpoints or status messages   */
enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}


//Heterogeneous Enums:You can also create enums with members of mixed types, but this is typically discouraged because it can lead to unexpected behavior. It's more common to use homogeneous enums with consistent value types.

