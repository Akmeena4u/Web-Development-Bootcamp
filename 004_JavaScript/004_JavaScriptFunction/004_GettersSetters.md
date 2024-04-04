
### Getter and Setter Methods in JavaScript

Getter and setter methods allow you to define custom behavior when reading or writing the values of object properties. They are particularly useful for controlling access to object properties and performing actions when properties are accessed or modified.

#### Getter Method
A getter method is defined using the `get` keyword followed by a method name. It is invoked when you access a property.

```javascript
let person = {
  firstName : "Ak",
  lastName : "Meena",

  // Getter method
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName); // Output: "Ak Meena"
```

In this example, `fullName` is a getter method that concatenates the `firstName` and `lastName` properties to form the full name of the person object. When you access `person.fullName`, the getter method is automatically invoked to retrieve the full name.

#### Setter Method
A setter method is defined using the `set` keyword followed by a method name. It is invoked when you assign a value to a property.

```javascript
let person = {
  firstName : "Ak",
  lastName : "Meena",

  // Setter method
  set fullName(value) {
    let name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
};

person.fullName = "Priti Meena";
console.log(person.firstName); // Output: "Priti"
console.log(person.lastName); // Output: "Meena"
```

In this example, `fullName` is a setter method that splits the input value into first name and last name, then assigns them to the corresponding properties. When you set `person.fullName`, the setter method is automatically invoked to update the `firstName` and `lastName` properties accordingly.

Using getter and setter methods provides a more controlled and flexible way to manage object properties and their values.
