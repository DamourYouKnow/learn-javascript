# Functions

## What are functions?

A **function** is a section of code that performs a specific task. A function 
will typically have multiple inputs and produce one output.

There are many reasons why functions are very useful:
1. They allow for code to be reused. Instead of constantly rewriting the same 
code to compute the volume of a cylinder you could instead create a function 
that takes in a radius and length as input and returns a volume.
2. They allow for code to be organized by grouping together the steps required 
for each task.
3. They create an abstraction for functionality in your code. As long as 
someone knows what a function does they do not need to understand the details 
of the function's implementation.

A good rule for writing good functions is that they should have a **single 
responsibility**. A good function will do one thing and one thing only.

## Creating functions

There are two ways of creating functions in JavaScript. Functions can either be 
declared or they can assigned into a variable.

### Declaring functions

Consider the following declaration of a function which takes two numbers `a` 
and `b` as inputs and outputs the sum of `a` and `b`:
```js
function sum(a, b) {
    return a + b;
}
```

The keyword `function` is used to declare the function.

The `function` keyword is followed by the name of the function, `sum`, and a 
set of parentheses containing the input parameters of the function separated by 
commas, `a` and `b`. Function parameters function in the same way that 
variables do, however, the values stored inside them are declared outside of 
the function. 

The code that is executed by the function is contained within brace brackets, 
`{}`. Statements inside the function are usually indented to improve code 
readability.

The `return` statement indicates what the output of the function will be. In 
this case `return` is followed by `a + b`, the sum of the two input parameters.

<div class="note">

A function does not need to have a return statement. Functions without return 
statements will implicitly return `undefined` after the last statement is 
executed.
</div>

<div class="warning">

Reaching a return statement will stop execution of the current function, even 
if there are other statements that follow the return statement.
</div>

Functions that are declared in this way are not executed immediately. When a 
function declaration is reached during code execution the name of the function 
is saved into memory so that it can be used at a later time. After a function is 
declared it can be executed as follows:
```js
const result = sum(2, 5);
```
In this case the function `sum` is executed with the parameters `2` and `5`. 
The function adds the two numbers together and the output returned is stored 
in the variable `result`. Let's put our function declaration and execution 
together to see things in action!

<div class="editor" source="sum.js"></div>

### Functions as variables

Functions can also be assigned into variables. Notice that the function 
definition changes slightly when we do this:
```js
const sum = function(a, b) {
    return a + b;
};
```
In this case the name of the function does not follow the `function` keyword 
as the variable `sum` is used to hold the function instead. Also note the `;` 
after assigning the function into the `sum` variable as the function is now 
being defined as part of a statement instead of a declaration.

The following code functions the exact same as the previous example:

<div class="editor" source="sum2.js"></div>

## Function scope

Any variable declared using `let` or `const` inside a function is only 
accessible inside that function. These variables are known to be declared 
in the **local scope** of the function.

The following code results in an error as the variable `descoped` is outside 
of the function `myFunction`'s local scope.

<div class="editor" source="scope.js"></div>

## Exercise

Create a function named `volume` that accepts three parameters representing the 
length, width, and height of a box and returns the volume of the box.

<div class="editor" test="volume-test.js"></div>