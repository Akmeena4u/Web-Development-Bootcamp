# Understanding Default and Named Exports in JavaScript Modules

## 1. Default Export:

In this case, a default value is exported, and it can be imported with any name. This is typically used when you want to export a single object, function, or variable. Let's illustrate this with an example:

### Example - module.mjs:

```javascript
// module.mjs
const a = 'Amit';
const b = 'Rahish';
const c = 'priti';
const d = 'Lovish';
const e = 'Priyanka';

export default b;
```

Now, let's import the default export in another file:

### Example - module2.mjs:

```javascript
// module2.mjs
import XYZ from './module.mjs';
console.log(XYZ);
// Output: The default exported value, which is ‘Rahish’, will be imported.
```

In default exports, the name of the import is independent of the name of the export.

## 2. Named Export:

In this case, specific values are exported, and the name of the import must match the name of the export. Curly brackets are used for named exports. Let's see an example:

### Example - module.mjs:

```javascript
// module.mjs
const a = 'Amit';
const b = 'Rahish';
const c = 'priti';
const d = 'Lovish';
const e = 'Priyanka';

export { b };
```

Now, let's import the named export in another file:

### Example - module2.mjs:

```javascript
// module2.mjs
import { b } from './module.mjs';
console.log(b);
// Output: The value of ‘b’ will be imported, which is ‘Rahish’.
```

Named exports are used when you want to export multiple values, and the name of the import must match the name of the export.
