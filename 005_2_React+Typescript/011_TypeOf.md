# `typeof` in TypeScript — Quick Notes

## 1. What is `typeof`?

`typeof` is used to get information about the type of a value.

In TypeScript, it has two important uses:

1. JavaScript `typeof`: Checks the type of a value at runtime.
2. TypeScript `typeof`: Refers to the type of an existing variable or object in a type position.

## 2. JavaScript `typeof` — Runtime

```
console.log(typeof "Amit");  // "string"
console.log(typeof 24);     // "number"
console.log(typeof true);   // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof {});     // "object"
console.log(typeof []);     // "object"
```

It returns a string describing the value's JavaScript runtime type.

Note: `typeof null` also returns `"object"` because of a historical JavaScript quirk.

## 3. TypeScript `typeof` — Get a Type

Use `typeof` in a type position to reuse the type of an existing variable.

```
const user = {
  name: "Amit",
  age: 24,
};

type User = typeof user;
```

TypeScript infers `User` as:

```
type User = {
  name: string;
  age: number;
};
```

Now you can reuse the type:

```
const user2: User = {
  name: "Rahul",
  age: 25,
};
```

This avoids writing the same object type again.

## 4. `typeof` with Functions

You can get the type of an existing function.

```
function add(a: number, b: number): number {
  return a + b;
}

type AddFunction = typeof add;
```

`AddFunction` is equivalent to:

```
type AddFunction = (a: number, b: number) => number;
```

You can reuse it:

```
const sum: AddFunction = (x, y) => x + y;
```

## 5. `typeof` with `keyof`

These operators are often used together.

```
const user = {
  name: "Amit",
  age: 24,
  email: "amit@example.com",
};

type User = typeof user;
type UserKeys = keyof User;
```

The resulting types are:

```
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = "name" | "age" | "email";
```

How it works:

- `typeof user` gets the type of the variable `user`.
- `keyof User` gets the keys of that type.

## 6. `typeof` with `as const`

By default, TypeScript generally infers `let` variables and mutable object properties using broader types. `as const` preserves literal values and makes object properties readonly.

```
const status = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

type Status = typeof status;
type StatusValue = typeof status[keyof typeof status];
```

Result:

```
type StatusValue = "active" | "inactive";
```

This is useful for constants, configuration objects, and status values.

## 7. Difference Between `typeof` and `keyof`

| Operator           | Purpose                          | Example                |
| ------------------ | -------------------------------- | ---------------------- |
| `typeof`           | Gets the type of a value         | `type T = typeof user` |
| `keyof`            | Gets the keys of a type          | `type K = keyof User`  |
| `typeof` + `keyof` | Gets keys from an existing value | `keyof typeof user`    |

## Quick revision

```
const product = {
  id: 1,
  name: "Laptop",
};

// Get the type of the variable
type Product = typeof product;

// Get the keys of the type
type ProductKeys = keyof Product;

// Get the type of a specific property
type ProductName = Product["name"]; // string
```

Remember: Use `typeof` to obtain a type from an existing value, and `keyof` to obtain the keys of a type.
