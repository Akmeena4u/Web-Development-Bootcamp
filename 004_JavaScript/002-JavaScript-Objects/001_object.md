
# JavaScript Object Basics

## Object Creation

You can create an object using the object literal notation `{}`.

```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

## Accessing Properties

You can access the properties of an object using dot notation or bracket notation.

```javascript
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
```

## Modifying Values and Adding Properties

You can modify existing values and add new properties to an object.

```javascript
person.gender = "Male"; // Adding a new property
person.age = 31; // Modifying an existing property
```

## Adding Methods to an Object

You can add methods to an object using object literal notation.

```javascript
const car = {
    brand: "Toyota",
    model: "Camry",
    start: function() {
        console.log("Engine started");
    }
};

car.start(); // Output: Engine started
```

## Object Methods

JavaScript provides object methods like `Object.keys()`, `Object.values()`, and `Object.entries()` for object enumeration.

```javascript
const keys = Object.keys(person);
console.log(keys); // Output: ["name", "age", "city"]
```

In these examples, we create JavaScript objects using object literal notation, access object properties using dot and bracket notation, modify values and add properties, add methods to objects, and use object methods like `Object.keys()` for enumeration.

