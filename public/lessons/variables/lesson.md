# Variables

A **variable** allows you to store values of different data types in the 
memory of your program. Variables are given are identified by a unique name 
so that the value stored in the variable can be retrieved for computation at 
a later time.

There are two keywords you can use to declare a variable, `let` and `const`. 
The `=` operator is used to assign a value into a variable.

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

A variable can also be declared without being assigned a value. In this case, 
the value of the variable will be `undefined`.
```js
const x; // the value of x is undefined.
```

Whether you use `let` or `const` should depend on if you want to be able to 
modify the value of the variable after it is declared. 

<div class="tip">

Try to use `const` whenever possible as code where variables get reassigned 
tends to be harder to read.

</div>

<div class="note">

The keyword `var` for declaring variables also exists in the language 
specification, however, the usage of this keyword is no longer recommended so 
it will not be covered in these tutorials.

</div>

The following code declares a variable named `myNumber` in the first line, 
adds `10` to the value of `myNumber` in the second line, and prints out the 
value of `myNumber` in the third line. What do you think the output will be?

<div class="editor" source="my-number.js"></div>

If you guessed `30` you were correct!

<div class="tip">

When naming your variables try to use names that will make the content of the 
variable obvious to someone reading your code. If you are going to store the 
age of a person in a variable then `age` will be a much better name than `x`.
</div>

## Exercise - Purchase cost

You are maintaining the code for computing the cost of purchases. 
The current system is a bit of a mess and requires 
someone to change the value of the `itemPrice` and `quantity` variables 
declared in the `purchaseCost` function for each purchase.

It also looks like someone made a mistake when calculating the total cost. 
The total cost is being calculated as the item price multiplied with itself 
instead of the item quantity.

The next customer would like to buy 11 boxes of chocolate priced at $3.25 per 
box. Fix the code below to properly handle this purchase.

<div class="editor" source="cost.js" test="cost-test.js"></div>