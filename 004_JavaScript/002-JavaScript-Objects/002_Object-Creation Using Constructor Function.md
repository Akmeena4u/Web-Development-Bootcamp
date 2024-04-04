
# Creating Objects with Constructor Functions




- **Factory Functions:** These are regular functions that return new objects. They are useful for creating multiple instances of objects with similar structures but separate copies of methods. Each new object created by a factory function has its own set of methods, which can lead to higher memory usage if many instances are created.

- **Constructor Functions:** These are special functions used with the `new` keyword to create instances of objects. They share methods across instances, making them more memory-efficient than factory functions when dealing with many instances. Constructor functions are suitable for creating multiple instances with shared methods.

## Constructor Function Overview

A constructor function is a blueprint for creating objects in JavaScript. It allows you to define properties and methods that all instances of the object will have.

```javascript
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
```

## Creating Instances

You use the `new` keyword to create instances of objects from a constructor function. Each instance has its own set of properties and methods defined by the constructor.

```javascript
// Create a new Employee object with the provided values.
let emp1 = new Employee("Harshit Devda", 69, "L.Lasan");

// Access properties of emp1.
console.log(emp1.name); // Output: Harshit Devda
console.log(emp1.address.colony); // Output: L.Lasan

// Call the 'work' method on emp1 with a task parameter.
emp1.work("coding"); // Output: Harshit Devda is working on coding.
```

In the example above, we define a constructor function `Employee` that creates objects with properties like `name`, `age`, `address`, and a method `work`. We then create an instance `emp1` using this constructor and access its properties and methods. Constructor functions are useful for creating multiple objects with similar structures and behaviors.
