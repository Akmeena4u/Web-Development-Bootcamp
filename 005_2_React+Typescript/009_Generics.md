# TypeScript Generics — Quick Revision Notes

## 1. What are Generics?

Generics allow reusable, type-safe code to work with different data types while preserving type information.

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(100);
identity(true); // T is inferred as boolean
```

**Remember:** Generics preserve type information; `any` largely removes type checking.

## 2. Generic Syntax

```ts
<T>       // Single type parameter
<T, U>    // Multiple type parameters
<T = string> // Default type
<T extends SomeType> // Constraint
```

`T` is a naming convention, not a special keyword.

## 3. Type Inference

TypeScript can infer generic types from function arguments.

```ts
function getValue<T>(value: T): T {
  return value;
}

const name = getValue("Amit"); // string
const age = getValue(24);      // number
```

Specify the type explicitly when needed:

```ts
getValue<number>(100);
```

## 4. Generic Functions

```ts
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

getFirst([1, 2, 3]);       // number | undefined
getFirst(["A", "B", "C"]); // string | undefined
```

Use generics when input and output types should remain related.

## 5. Multiple Type Parameters

Use multiple parameters when values can have different types.

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair("Amit", 24);
// [string, number]
```

## 6. Generic Constraints (`extends`)

Restrict which types a generic can accept.

```ts
function getLength<T extends { length: number }>(
  value: T
): number {
  return value.length;
}

getLength("Hello");    // Valid
getLength([1, 2, 3]);  // Valid
// getLength(100);     // Error
```

**Remember:** `extends` in a generic constraint means the type must satisfy a requirement.

## 7. `keyof` and `T[K]`

Essential for safe access to object properties.

```ts
function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

const user = { name: "Amit", age: 24 };

const name = getProperty(user, "name"); // string
const age = getProperty(user, "age");   // number
// getProperty(user, "email");          // Error
```

- `keyof T`: union of keys of `T`.
- `K extends keyof T`: restricts `K` to valid keys.
- `T[K]`: type of the selected property.

## 8. Generic Interfaces and Type Aliases

```ts
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

type Box<T> = {
  value: T;
};

const response: ApiResponse<string[]> = {
  data: ["React", "TypeScript"],
  success: true,
};

const box: Box<number> = { value: 100 };
```

Use these to define reusable data structures.

## 9. Generic Classes

```ts
class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const numbers = new Storage<number>();
numbers.add(10);
numbers.add(20);
```

`Storage<number>` stores numbers; `Storage<string>` stores strings.

## 10. Default Type Parameters

```ts
interface ApiResponse<T = string> {
  data: T;
}

const a: ApiResponse = { data: "Hello" };
const b: ApiResponse<number> = { data: 100 };
```

If the type argument is omitted, `T` defaults to `string`.

## 11. Useful Utility Types

| Utility | Purpose |
|---|---|
| `Partial<T>` | Makes properties optional |
| `Required<T>` | Makes properties required |
| `Readonly<T>` | Makes properties readonly |
| `Pick<T, K>` | Selects properties |
| `Omit<T, K>` | Excludes properties |
| `Record<K, V>` | Creates a key-value object type |
| `ReturnType<T>` | Extracts a function's return type |
| `Parameters<T>` | Extracts a function's parameter tuple |

Example:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, "id" | "name">;
type UpdateUser = Partial<User>;
type CreateUser = Omit<User, "id">;
```

## 12. Advanced Concepts — Know the Basics

**Conditional types**

```ts
type IsString<T> = T extends string ? true : false;
```

**Mapped types**

```ts
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

**`infer`**

Used inside conditional types to infer a type.

```ts
type ElementType<T> =
  T extends (infer U)[] ? U : never;

type Result = ElementType<number[]>; // number
```

Learn these after you understand ordinary generic functions and constraints.

## 13. Common Mistakes

- Using `any` when a generic would preserve type safety.
- Accessing properties without adding an appropriate constraint.
- Using too many generic parameters unnecessarily.
- Assuming generic types validate external data at runtime.
- Overcomplicating a solution with advanced types.

## 14. Interview Quick Questions

1. **What are generics?** Reusable, type-safe abstractions that preserve type information.
2. **Generics vs `any`?** Generics preserve relationships between types; `any` bypasses many checks.
3. **What does `extends` do?** Restricts a generic to types satisfying a constraint.
4. **What is `keyof`?** Produces a union of an object's keys.
5. **What is `T[K]`?** Extracts the type of property `K` from `T`.
6. **Can interfaces and classes use generics?** Yes.
7. **What is type inference?** TypeScript determines the generic type automatically.
8. **Do generics exist at runtime?** Generic type parameters are erased during compilation.

## Final Revision Priority

Master these first:

1. `<T>` and type inference.
2. Generic functions and arrays.
3. Multiple type parameters.
4. Constraints using `extends`.
5. `keyof` and `T[K]`.
6. Generic interfaces and classes.
7. Common utility types.

**One-line summary:** Generics let you write reusable code while keeping the relationship between input types, output types, and data structures intact.
