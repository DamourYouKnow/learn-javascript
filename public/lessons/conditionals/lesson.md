# Conditionals

We will often want the programs we write to be able to make decisions.

## Comparison operators

In order for us to write code that makes decisions, JavaScript includes 
multiple comparison operators that are used to compare one value to another.

The **strict equality** operator `===` returns true if the two values being 
compared are equal to each other, otherwise it will return false.
```js
2 === 2 // true
'red' === 'blue' // false
```

The **strict inequality** operator `!==` returns true if the two values being 
compared are not equal to each other, otherwise it will return false.
```js
2 !== 2 // false
'red' !== 'blue' // true
```

The **weak equality** operator `==` is similar to the strict equality operator, 
however, the conversion of one type to another will take place whenever 
possible.
```js
2 == '2' // true, the string '2' gets converted to the number type
undefined == null // true
null == 0 // false
```

The **weak inequality** operator `!=` is similar to the strict inequality 
operator, however, the conversion of one type to another will take place whenever 
possible.
```js
2 != '2' // false, the string '2' gets converted to the number type
undefined != null // false
null == 0 // true
```

<div class="warning">

Usage of the weak equality and weak inequality operators are not recommend as 
the rules for when type conversion takes place are inconsitent in JavaScript.

Consider the following three comparisons:
```js
0 == '0' // true
0 == [] // true
'0' == [] // false
```

Yikes! It's best to avoid the weak comparison operators if you want to avoid 
any nasty bugs.
</div>

The **greater than** operator `>` returns true if the first value being 
compared is greater than the second, otherwise it will return false.
```js
3 > 2 // true
2 > 2 // false
```

The **greater than or equal to** operator `>=` returns true if the first value 
being compared is greater than or equal to the second, otherwise it will return 
false.
```js
3 >= 2 // true
2 >= 2 // true
1 >= 2 // false
```

The **less than** operator `<` returns true if the first value being compared 
is less than the second, otherwise it will return false.
```js
2 < 3 // true
2 < 2 // false
```

The **less than or equal to** operator `<=` returns true if the first value 
being compared is less than or equal to the second, otherwise it will return 
false.
```js
1 <= 2 // true
2 <= 2 // true
3 <= 2 // false
```

## Logical operators

JavaScript also includes three **logical operators** which can be used used 
to perform operations on **boolean** data types.

The **and** operator `&&` evaluates two booleans and returns `true` if **both** 
values are `true`, otherwise it will return `false`.
```js
true && true // true
true && false // false
false && false // false
```

The **or** operator `||` evaluates two booleans and returns `true` if any of the 
values are `true`, otherwise it will return `false`.
```js
true || true // true
true || false // true
false || false // false
```

The **not** operator `!` returns the inverse of a boolean. If the value is 
`true` the not operator will return `false` and if the value is `false` it will 
return `true`.
```js
!true // false
!false // true
```

Logical operators can be combined to form logical expressions similar to 
numbertical expressions. Parentheses can be added to explictily define the 
order of operations, however, if none are provided the following order of 
operations will be used:
1. Not - `!`
2. And - `&&`
3. Or - `||`

Try to guess what the output of the following logical expressions will be 
before running the code.

<div class="editor" source="expr.js"></div>

## If statements

The simplest conditional statement is the `if` statement. An `if` statement 
simply evalutates a condition and executes a block of code if that condition 
is `true`.

```js
if (grade >= 80) {
    console.log('You got an A!');
}
```

The example above checks if the value stored in the variable `grade` is greater 
than or equal to `80` and if it outputs `'You got an A!'`.

## Else if statements

An `else if` statement can follow an `if` statement another `else if` statement 
and simply evaluates a new condition if the condition in the previous 
statement was false.
```js
if (grade >= 80) {
    console.log('You got an A!');
}
else if (grade >= 70) {
    console.log('You got a B!');
}
else if (grade >= 60) {
    console.log('You got a C!');
}
else if (grade >= 50) {
    console.log('You got a D!');
}
```

A few `else if` statements where added to the example above. Now if one 
condition fails, the `else if` statement that follows will be evaluated. 
Note that if the value of `grade` is less than `50` then all of the conditions 
will fail and none of the code inside any of the if statements will be 
executed.

## Else statements

And `else` statement can follow an `if` statement or an `else if` statement 
and simply executes the code contained within it if the previous statement was 
false.
```js
if (grade >= 80) {
    console.log('You got an A!');
}
else if (grade >= 70) {
    console.log('You got a B!');
}
else if (grade >= 60) {
    console.log('You got a C!');
}
else if (grade >= 50) {
    console.log('You got a D!');
} 
else {
    console.log('You failed!');
}
```

Now the code will output `'You failed!'` if none of the passing grade ranges 
have been met.

## Exercise

A person is eligbile to vote in Canada if they are a Canadian citizen **and** 
18 years of age or older.

The function `eligibleToVote` has two input parameters. The first parameter 
`citizen` is a boolean and will be `true` if the person is a Canadian citizen 
and `false` if they are not. The second parameter `age` is the age of the 
person.

This function should return a **string** indicating whether or not a person is 
eligible to vote. If a person is eligible to vote return 
`'You are eligible to vote!'`. If they are not return 
`'You are not eligible to vote!'`.

<div class="editor" source="vote.js" tests="vote-test.js">
