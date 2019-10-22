# Loops

Loops are useful way of repeatedly executing a block of code a pre-determined 
number of times.

## While loop

While loops are used when we want to introduce repeating behaviour that will 
stop once a certain condition is met. While loops are given a condition and 
a block of code to run while the condition resolves to `true`.

<div class="editor" source="while.js"></div>

The keyword `while` is used to declare the while loop while the condition 
inside the parenthesis is used to determine when the loop will stop.

While the array is not empty (has more than 0 items) the last item is removed 
with `pop()` and output using `console.log()`.

Eventually the last item of the array is removed causing the while condition to 
resolve to `false` and the execution of code to break out of the loop.

Try adjusting the exit condition of the loop so that it does not remove the 
first two items in the array.

<div class="note">

It's possible for the while condition of a loop to be `false` initially. In 
this case the code inside the loop body is never executed.
</div>

## For loop

For loops are used when we want to keep track of an iterator or counter 
variable throughout the execution of a loop. The following example will output 
each number from 1 to 5.

<div class="editor" source="for.js"></div>

This for loop can be broken down into three parts:
- The initial value of the iterator variable, `let count = 0`.
- The loop condition, `count <= 5`. This condition is checked before each 
execution of the loop body. If this condition is false the loop will stop 
executing.
- The step operation, `count++` (Note that this equivalent to 
`count = count + 1`). This operation is performed after each execution of the 
loop body.

For loops are most often used when iterating over an array.

<div class="editor" source="forarray.js"></div>

This example outputs each item in the array, skipping every second item.

Note `<` is used in the loop condition instead of `<=`. This is because arrays 
are indexed starting from 0 and the last index of an array is 
`array[array.length - 1]`. Using the `<=` operator would result in 
`array[array.length]` being accessed which would return `undefined`.

### For of

The `of` keyword can be used inside a for loop when we want to loop through 
every value in an array. The following code uses a for of loop to compute 
the sum of all of the numbers in an array.

<div class="editor" source="forof.js"></div>

The loop in the example above is simply an easier way to express the following:
```js
for (let i = 0; i < array.length; i++) {
    sum += array[i]; // sum = sum + sum;
}
```

## Continue and break

The `continue` statement can be used inside a loop to skip execution of the 
current loop cycle. The following example will skip execution of the current 
cycle if `item` is divisible by `3` (Recall that the `%` operator returns 
remainder of a division).

<div class="editor" source="continue.js"></div>

The `break` statement can be used inside a loop the stop execution of the loop. 
The following example will stop execution of the loop if `item` is divisible by 
`5`.

<div class="editor" source="break.js"></div>

## Example

The function `weightedSum` should return the sum of each number in the array 
multiplied by its position in the array (starting from 1). The function should 
return `0` when given an empty array.

For example the `weightedSum` of `[2, 5, 4]` is computed as 
`(2 * 1) + (5 * 2) + (4 * 3) = 24`.

<div class="editor" source="weighted-sum.js" test="weighted-sum-test.js"></div>


