# `keyof` in TypeScript

`keyof` is a TypeScript operator that gives you a union of the keys of a type.

## 1. Simple example

```
type User = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;
```

Now, `UserKeys` becomes:

```
type UserKeys = "name" | "age" | "email";
```

In simple words, `keyof User` gives all the property names of `User` as a union of string literal types.

## 2. Why do we use `keyof`?

Suppose you want to access a user's property safely.

```
type User = {
  name: string;
  age: number;
};

function getProperty(key: keyof User) {
  return key;
}

getProperty("name"); // Valid
getProperty("age");  // Valid
// getProperty("email"); // Error
```

Because `"email"` is not a key of `User`, TypeScript shows an error.

## 3. `keyof` with Generics

This is one of the most useful applications of `keyof`.

```
function getValue<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const user = {
  name: "Amit",
  age: 24,
};

const name = getValue(user, "name"); // string
const age = getValue(user, "age");   // number
```

Understand these three parts:

- `keyof T` — all keys of type `T`.
- `K extends keyof T` — `K` must be a valid key of `T`.
- `T[K]` — the type of the value at that key.

## Quick revision

| Expression          | Meaning                     |
| ------------------- | --------------------------- |
| `keyof User`        | All keys of `User`          |
| `K extends keyof T` | Restricts `K` to valid keys |
| `T[K]`              | Type of a selected property |

Remember: `keyof` gives you the keys, not the values.
