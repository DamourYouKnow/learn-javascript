# Variables

A **variable** allows you to store values of different data types in the 
memory of your program. Variables are given a name by the programmer so that 
the value stored in the variable can be retrieved for computation at a later 
time.

There are two keywords you can use to declare a variable, `let` and `const`. 

A variable declared with `let` can be reassigned a new value after 
it has been declared:
```js
let x = 30; // the value of x is 30 after executing this line.
let x = x + 9; // the value of x is 39 after executing this line.
```

A variable declared with `const` cannot be reassigned a new value after 
declaration:
```js
const x = 30; // the value of x is 30 after executing this line.
const x = x + 9; // this is illegal, const variables can't be reassigned.
```

Whether you use `let` or `const` should depend on if you want to be able to 
modify the value of the variable after it is declared. 

<div class="tip">

**Tip:** Try to use `const` whenever possible as code where variables get 
reassigned tends to be harder to read.

</div>

<div class="note">

**Note**: The keyword `var` for declaring variables 
also exists in the language specification, however, the usage of this 
keyword is no longer recommended.

</div>

The following code declares a variable named `myNumber` in the first line, 
adds `10` to the value of `myNumber` in the second line, and prints out the 
value of `myNumber` in the third line. What do you think the output will be?

<div class="editor" source="my-number.js"></div>

If you guessed `30` you were correct!

## Exercise

You are maintaining the code for computing the cost of purchases. 
The current system is a bit of a mess and requires 
someone to change the value of the `itemPrice` and `quantity` variables 
declared in the `purchaseCost` function for each purchase.

It also looks like someone made a mistake when calculating the total cost. 
The total cost is being calculated as the item price multiplied with itself 
instead of the item quantity.

The next customer would like to buy 11 boxes of chocolate priced at $3.25 per 
box. Fix the code below to properly handle this purchase.

<div class="editor" source="exercise.js" tests="tests.js"></div>