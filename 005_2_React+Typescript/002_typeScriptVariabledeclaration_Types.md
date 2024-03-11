


# TypeScript - Variable Declarations and Special Types

## Variable Declarations

In TypeScript, variable declarations are similar to JavaScript and can be done using the `let`, `const`, or `var` keywords.

```typescript
let x = 10;
const y = 20;

let sum;
const title = 'Nit Warangal ';
```

### Basic Variable Types - Type Annotations

TypeScript allows explicit specification of variable types using type annotations.

```typescript
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Amit';

let sentence: string = `My name is ${name}
I am a beginner in TypeScript`;

console.log(sentence);
```

## Benefits of TypeScript over JavaScript

1. TypeScript enhances code maintainability through rigorous type checking.
2. TypeScript provides intelligent code suggestions and autocompletion, improving development efficiency.

## TypeScript Special Types

### 1. `null` and `undefined`

These types represent the values `null` and `undefined` and are often used to indicate the absence of a value.

```typescript
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;
```

### 2. `any` Type

`any` is a type that disables type checking and allows all types to be used.

```typescript
let u: any = true;
u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
```

### 3. `unknown` Type

`unknown` is a safer alternative to `any`, preventing the direct use of unknown types without type checking.

```typescript
let userInput: unknown;
let userName: string;

userInput = 42; // Valid assignment

if (typeof userInput === 'string') {
  userName = userInput; // Valid assignment
} else {
  userName = 'Default'; // Handle the case when userInput is not a string
}
```

### 4. `never` Type

`never` effectively throws an error whenever it is defined.

```typescript
let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
```

### 5. Union Types

Union types allow a variable to have one of multiple types.

```typescript
let value: number | string;
value = 42; // Valid
value = 'Hello'; // Valid
```

### 6. Intersection Types

Intersection types combine multiple types into one.

```typescript
type Person = { name: string };
type Address = { address: string };
type Contact = Person & Address;

const contactInfo: Contact = {
  name: 'John',
  address: '123 Main St',
};
```

### 7. Type Assertions

Type assertions allow treating an expression as a different type.

```typescript
let someValue: any = 'Hello';
let strLength: number = (someValue as string).length;
```

These special types and features make TypeScript a powerful and expressive language with enhanced type safety.

