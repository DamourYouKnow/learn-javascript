# Arrays

**Arrays** in JavaScript are an ordered list of items.

```js
// Declare an array of numbers:
const numbers = [2, 4, 6, 8, 10];

// Declare an array of strings:
const strings = ['this', 'is', 'a', 'string', 'array'];

// Declare an empty array:
const empty = [];
```

To retrieve an item an array, we use the index of operator `[]`. The numerical 
position, **starting from 0**, of the element to retrieve is inserted in this 
operator. Since the indexing of arrays starts from 0, `array[0]` refers to the 
first item in `array`, `array[1]` refers to the second item of `array`, and so 
on.

The last item of an array can be retrieved using the `length` property of an 
array and subtracting `1`, so `array[array.length - 1]` would refer to the last 
item of `array`.

Given the following array declaration:
```js
const numbers = [5, 10, 15];
```
- `numbers[0]` returns `5`.
- `numbers[1]` returns `10`.
- `numbers[2]` returns `15`.
- `numbers[3]` returns `undefined`.

<div class="editor" source="index.js"></div>


## Useful array functions

The following functions can be called on any array and are useful for 
manipulating the contents of an array.

### push()

Adds a an item to the end of an array.

```js
const array = [1, 2, 3];
array.push(4); // array is now [1, 2, 3, 4]
```

Multiple parameters can also be provided in order to add multiple items at once.

```js
const array = [1, 2, 3];
array.push(4, 5, 6); // array is now [1, 2, 3, 4, 5, 6]
```

### pop()

Removes the last item of an array.

```js
const array = ['a', 'b', 'c'];
array.pop() // array is now ['a', 'b'] 
```

This function also returns the item that was removed.

```js
const array = ['a', 'b', 'c'];
const removed = array.pop() // array is now ['a', 'b'], removed is 'c'
```

<div class="note">
    Calling `pop` on an empty array will return `undefined`.
</div>

### unshift()

Similar to `push`, however, items are added to the start of an array instead 
of to the end.

```js
const array = [1, 2, 3];
array.unshift(4, 5, 6) // array is now [4, 5, 6, 1, 2, 3] 
```

<div class="warning">

The `unshift` function suffers from poor performance as as the entire array is 
re-indexed behind the scenes.

</div>

### shift()

Similar to `pop`, however, the first item in the array is removed and returned 
instead of the last.

```js
const array = ['a', 'b', 'c'];
array.pop() // array is now ['b', 'c'] 
```

<div class="warning">

The `shift` function suffers from poor performance as as the entire array is 
re-indexed behind the scenes.

</div>

### indexOf()

Returns the index of the first matching element in an array. This function 
will return  `-1` if the item is not in the array.

```js
const array = ['one', 'two', 'three'];
const index = array.indexOf('two'); // index is 1
const index2 = array.indexOf('four'); // index2 is -1
```

### includes()

Returns `true` if an item is in an array, otherwise it will return `false`.

```js
const array = [2, 4, 6, 8];
const included = array.includes(4); // included is true
const included2 = array.includes(5); // included2 is false
```

### slice()

Returns a new array extracted from a starting and ending position in an 
existing array.
```js
const slice = [10, 20, 30, 40, 50].slice(1, 3); // slice is [20, 30]
```

The end position is optional. If it is not provided the end of the array 
will be used as the last position in the slice.
```js
const slice = [10, 20, 30, 40, 50].slice(2); // slice is [30, 40, 50]
```

The start and end positions can also be negative indexes. In this case the 
slice index will be an offset from the end of the array. 
```js
const slice = [10, 20, 30, 40, 50].slice(0, -2); // slice is [10, 20, 30]
```

<div class="note">

The `slice` function does not modify the original array.

</div>

### join()

Concatenates elements in an array into a string using a a string as a 
separator.
```js
const cities = ['Ottawa', 'Toronto', 'Montreal'];
const hyphens = cities.join('--'); // hyphens is 'Ottawa--Toronto--Montreal'
const spaces = cities.join(' '); // spaces is 'Ottawa Toronto Montreal'
const noSeparator = cities.join(''); // noSeparator is 'OttawaTorontoMontreal'
```

If no separator string is provided the default `','` will be used.
```js
// cities is 'Ottawa,Toronto,Montreal'
const cities = ['Ottawa', 'Toronto', 'Montreal'].join();
```

<div class="note">

Later on we will learn about some more useful array functions such as `map`, 
`reduce`, `filter`, and `sort`.

</div>

## Exercise

Write a function named `list` that takes in a list of strings as input and 
returns a string representing the list as it would appear in the English 
language.

Items in the array should be separated by a comma and a space.

The conjunction `and` should be inserted before the last item in the array if 
the array has 2 or more items. Do not insert a comma if the array has exactly 
two items.

Consider the following examples:
- An input of `['celery', 'lettuce', 'potatoes']` should return the string 
`'celery, lettuce, and potatoes'`.
- An input of `['celery', lettuce]` should return the string 
`'celery and lettuce'`.
- An input of `['celery']` should return `'celery'`.
- An input of `[]` should return the empty string `''`.

<div class="editor" test="list-test.js">