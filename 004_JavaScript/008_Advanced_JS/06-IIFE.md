### IIFE (Immediately Invoked Function Expression)

#### Definition and Purpose
An IIFE (Immediately Invoked Function Expression) is a JavaScript design pattern used to encapsulate and execute code immediately after its definition. It consists of an anonymous function enclosed within parentheses and immediately invoked by additional parentheses `(function () { /* code */ })();`.

#### Key Components
1. **Anonymous Function**:
   - The function is declared without a name to avoid polluting the global namespace.
   - Provides a lexical scope for the enclosed code, preventing variable leakage to the global scope.

2. **Immediate Invocation**:
   - The function is invoked immediately after its definition by placing `()` at the end, ensuring the code inside executes right away.

#### Use Cases
1. **Avoid Global Namespace Pollution**:
   - Useful for executing initialization code or one-time tasks without creating global variables.
   - Example:
     ```javascript
     (() => {
       let firstVariable;
       let secondVariable;
       // Initialization code
     })();
     ```

2. **Async Function Execution**:
   - Allows usage of `await` and `for-await` even in environments that don't support top-level `await`.
   - Example: without using IIFE
 ```javascript
     let data;

   async function getData() {
  const response = await fetch('https://api.example.com/data');
  data = await response.json();
  console.log('Data fetched:', data);
}

// Calling getData to retrieve and handle the data
getData();

 ```
 - Example: with using IIFE
```javascript
const fetchData = (async () => {
  const response = await fetch('https://api.example.com/someData');
  const data = await response.json();
  console.log('Fetched Data:', data);
})();
```
- We can also write like this
```javascript
const datå = (async ( ) => await fetch())()
```

3. **Module Pattern**:
   - Utilized to create private and public variables/methods, implementing a module-like structure.
   - Example:
 ```javascript
     const atm = (initialBalance) => {
  let balance = initialBalance;

  const withdraw = (amt) => {
    if (amt > balance) {
      console.log("Are you kidding?");
    } else {
      balance -= amt;
      return balance;
    }
  };

  return {
   { withdraw},
  };
};

// Immediately Invoked Function Expression (IIFE) to create an ATM module instance
const myATM = (() => {
  // Initialize ATM with an initial balance of 1000
  const atmInstance = atm(1000);

  // Public methods exposed by the module
  return {
    withdraw: atmInstance.withdraw,
  };
})();

// Usage example: withdrawing from the ATM
console.log(myATM.withdraw(500)); // Output: 500 (Remaining balance after withdrawal)
console.log(myATM.withdraw(1500)); // Output: "Are you kidding?"

```
1. This example demonstrates how the module pattern can be implemented using an IIFE in JavaScript to achieve encapsulation and expose controlled access to functionality while maintaining privacy of internal variables
2. The IIFE pattern is a powerful tool in JavaScript for managing scope, encapsulation, and avoiding global namespace issues. It's commonly used in modern JavaScript development for various purposes like initialization, async operations, and modularization.
