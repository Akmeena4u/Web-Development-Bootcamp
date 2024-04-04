
# If...Else Statements in JavaScript

## Single If Else
```javascript
let number = 10;
if(number > 10)
{
    console.log("Number is greater than 10");
}
else 
{
    console.log("Number is lesser or equal to 10");
}
```
Output:
```
Number is lesser or equal to 10
```

In a single if...else statement, if the condition inside the if block evaluates to true, the code inside the if block is executed; otherwise, the code inside the else block is executed.

## Multiple If Else
```javascript
if(number < 10)
{
    console.log("Number is lesser than 10");
}
else if(number > 10)
{
    console.log("Number is greater than 10");   
}
else{
    console.log("Number is equal to 10");
}
```
Output:
```
Number is equal to 10
```

In a multiple if...else statement, multiple conditions are checked sequentially. If the first condition is true, the code inside the corresponding if block is executed. If the first condition is false, the next condition (else if) is checked. If none of the conditions are true, the code inside the else block is executed.

The if...else statements are fundamental in controlling the flow of your code based on different conditions, allowing for branching logic and decision-making in JavaScript programs.
