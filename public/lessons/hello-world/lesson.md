# Hello, world!

## Introduction

The example below will output a **string** using `console.log()` 
when the `run` button is clicked. 

A **string** is simply a sequence of characters which can be defined by 
wrapping the characters with quotes. `"Hello, world!"` and `'JavaScript is fun!'` 
are both examples of strings. Notice how they can either be surrounded by 
double quotes (`""`) or single quotes (`''`).

The following code will output the string `"Hello, world!"`. Try it!

<div class="editor" source="hello_world.js"></div>

## Code execution and comments

JavaScript starts executing code statements in the order that they appear. 
Each statements in JavaScript ends with the `;` character. Later on, we will 
learn about different types of statements used to create functioning programs.

Comments can be included in code to provide additional details to the person 
reading the code that may not be obvious through reading the code alone. 
Comments are ignored during code execution and can be declared in two different 
ways.

Any text following `//` on the same line is are inline comments. 
```js
// this is a comment.
```

Any text following `/*` and and before `*/` are block comments.
```js
/*
This...

...is a block comment
*/
```

The following example will execute the two statements `console.log('Hello');` 
and `console.log('World!');` in the order that they are written:

<div class="editor" source="hello_world2.js"></div>

## Exercise

Througout the different lessons, you will also be presented with different 
exercises. We will evaluate your code against different criteria and give 
you immediate feedback.

This first exercise is simple. Change the **string** on the first line to 
`'I am a programming wizard!'`

<div class="editor" source="exercise.js" tests="tests.js"></div>
