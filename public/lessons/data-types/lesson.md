# Data Types

## Number

The **number** type is used to represent a numerical value. This can either 
be an integer value such as `1`, `2`, or `-3` or it can be a decimal value 
such as `3.14` or `-1.23`.

This type is useful for performing arithmetic. The following basic operations 
can be performed on the **number** type:

1. Exponentiation: `5 ** 10` returns `9765625`.
2. Multiplication: `5 * 10` returns `50`.
3. Division: `5 / 10` returns `0.5`.
4. Modulus (division remainder): `5 % 10` returns `5`.
5. Addition: `5 + 10` returns `15`.
6. Subtraction: `5 - 10` returns `-5`.

Parentheses can be used to determine the order of operations when performing 
arithmetic. If no parentheses are provided then operations will be performed 
in the order listed above.

Try to guess what the following output will be:

<div class="editor" source="oporder.js"></div>

If you guessed `12` you were correct!

## String

The **string** type holds a sequence of characters such as `"Hello, world!"` 
or `"JavaScript is fun!"`.

Strings can be concatenated together with the `+` operator. For example, 
`'Hello, ' + 'World' + '!'` returns `'Hello, World!'`

## Boolean

The **boolean** type holds either a value of  either `true` or `false` and is 
useful for when we want our program to make decisions. We'll learn more about 
this later.

## Null

The value `null` is used to explicitly express the absence of information. 
`null` can be used when we know that a value does not exist, is empty, or is 
unknown.

## Undefined

The value `undefined` is used to represent something that has not been given a 
value. 

There is a slight semantic difference between `null` and `undefined`. 
If something is `null` we can conclude it does exist. This same conclusion 
cannot be made is something is `undefined`. 

<div class="note">

The difference between `null` and `undefined` can be very confusing at first 
and the distinction between the two should become more clear as you progress 
through different examples where the two values are used. 
</div>

## Exercise

Write out four separate statements that output values of different data types 
using `console.log`:
- The first line should output a **number**.
- The second line should output a **string**.
- The third line should output a **boolean**.
- The fourth line should output `null`.
- The fifth line should output `undefined`.

<div class="editor" tests="datatypes-test.js"></div>

For more information on data types, check out 
[Mozilla's documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures).