//A JavaScript object is an entity having state and behavior (properties and method). For example: car, pen, bike, chair, glass, keyboard, monitor etc.
 // and in js Objects are collections of key-value pairs, where each key is a string (or a Symbol), and the associated value can be of any data type, including other objects.

  //#1-Object Creation--You can create an object using the object literal notation {}
  
  const person = {
    name: "John",
    age: 30,
    city: "New York"
};


//#2-Accessing Properties: You can access the properties of an object using dot notation or bracket notation.
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30

//#3-Modifying values and adding more val
person.gender = "Male"; // Adding a new property
person.age = 31; // Modifying an existing property


//#4- Adding methods in object-- as we discussed we can add property and method of a object

const car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
        console.log("Engine started");
    }
};

car.start(); // Output: Engine started


//#5-Object Methods:such as Object.keys(), Object.values(), and Object.entries() for object enumeration.

const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"]

