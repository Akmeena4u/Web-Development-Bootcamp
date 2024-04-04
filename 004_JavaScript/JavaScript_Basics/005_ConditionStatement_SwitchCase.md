
# Switch Statement in JavaScript

The switch statement is used to perform different actions based on different conditions. It provides an efficient alternative to using multiple if...else if...else statements when you have a single value to test against multiple possible cases.

## Example
```javascript
let weekNumber = 4;
switch (weekNumber) {
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wednesday");
        break;
    
    case 4:
        console.log("Thursday");
        break;
    
    case 5:
        console.log("Friday");
        break;
    
    case 6:
        console.log("Saturday");
        break;    
    
    case 7:
        console.log("Sunday");
        break;
    
    default:
        console.log("Invalid")
}
```
Output:
```
Thursday
```

In the switch statement, the value of `weekNumber` is tested against different cases. If a case matches, the corresponding code block is executed. The `break` statement is used to exit the switch statement after a case is executed. If none of the cases match, the code inside the `default` block is executed.

The switch statement is particularly useful when you need to handle multiple possible cases efficiently in your JavaScript code.
