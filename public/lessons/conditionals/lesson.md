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

The **weak inequality** operator is similar to the strict inequality operator, 
however, the conversion of one type to another will take place whenever 
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

The **greater than** operator returns true if the first value being compared 
is greater than the second, otherwise it will return false.
```js
3 > 2 // true
2 > 2 // false
```

The **greater than or equal to** operator returns true if the first value being 
compared is greater than or equal to the second, otherwise it will return false.
```js
3 >= 2 // true
2 >= 2 // true
1 >= 2 // false
```

The **less than** operator returns true if the first value being compared 
is less than the second, otherwise it will return false.
```js
2 < 3 // true
2 < 2 // false
```

The **less than or equal to** operator returns true if the first value being 
compared is less than or equal to the second, otherwise it will return false.
```js
1 <= 2 // true
2 <= 2 // true
3 <= 2 // false
```

## If statements

The simplest conditional statement is the `if` statement.

## Ternary operator