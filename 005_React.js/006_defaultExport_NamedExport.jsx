/*1. Default Export: In this case, if import occurs by any name, Suppose XYZ, then the default value will be exported. It is generally used to export a single object, function, or variable.
  Let’s understand with an example-Create two files. We are creating module.mjs and modue2.mjs. We will be performing a default export from module.mjs to module2.mjs*/
//module.mjs
const a = 'Amit';
const b = 'Rahish';
const c = 'priti';
const d = 'Lovish';
const e = 'Priyanka';
export default b;

//This is an example of a Default export, Now let’s import it.

//in module2.mjs
import XYZ from './module.js'
console.log(XYZ);
//output:-The default exported value, which is ‘Rahish’, will be imported. In default Export, the name of Import is Independent of the name of Export.


/*2. Named Export: In this case, we export some specific values. The name of import is dependent on the name of Export which means You can’t use a different name in the Import and Export function.
  We use Curly brackets for Named export. For example: performing the same export using named export.*/
//module.mjs
const a = 'Amit';
const b = 'Rahish';
const c = 'priti';
const d = 'Lovish';
const e = 'Priyanka';
export {b};

//module2.mjs
import {b} from './module.js'
console.log(b);

//output:-The value of ‘b’ will be imported, which is ‘Rahish’.  Name Exports are used to export multiple values.
