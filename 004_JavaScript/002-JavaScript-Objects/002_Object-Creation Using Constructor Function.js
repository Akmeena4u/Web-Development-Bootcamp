//In JavaScript, you can create objects using both factory functions and constructor functions

// A constructor function is a blueprint for creating objects. You use the new keyword to create instances of objects from a constructor function. 
// Constructor functions are often used when you want to create multiple objects with the same structure and methods.


// Define a constructor function for creating Employee objects.
function Employee(name, age, colony, street) {
    // Initialize the name and age properties with the provided values.
    this.name = name;
    this.age = age;

    // Create an 'address' object with 'street' and 'colony' properties.
    this.address = {
        street, 
        colony, 
    }

    // Define a 'work' method for the Employee.
    this.work = function(task) {
        console.log(`${this.name} is working on ${task}.`);
    }
}

// Create a new Employee object with the provided values.
let emp1 = new Employee("Harshit Devda", 69, "L.Lasan");

console.log(emp1.name);
console.log(emp1.address.colony);

// Call the 'work' method on emp1 with a task parameter.
emp1.work("coding"); // Output: Harshit Devda is working on coding.
