# Understanding Prototypes in JavaScript

The concept of prototypes in JavaScript allows us to share properties and methods among instances of a function. Let's explore this concept with a simple example:

## Creating a Person Function

```javascript
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
```

Here, we define a `Person` function that takes `firstName` and `lastName` as parameters and assigns them to `this.firstName` and `this.lastName`, respectively.

## Creating Instances of Person

```javascript
const person1 = new Person('Bruce', 'Wayne');
const person2 = new Person('Clark', 'Kent');
```

We create two instances of the `Person` function using the `new` keyword.

## Adding a Method to Instances

```javascript
person1.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
```

We add a method `getFullName` to `person1` instance using dot notation.

## Using Prototype for Shared Methods

```javascript
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
```

Instead of adding the method directly to instances, we add it to the `Person` function's prototype.

Now, if we log `person1.getFullName()` and `person2.getFullName()`:

```javascript
console.log(person1.getFullName()); // Output: Bruce Wayne
console.log(person2.getFullName()); // Output: Clark Kent
```

Both instances can access the `getFullName` method via the prototype, ensuring shared functionality across all instances.
