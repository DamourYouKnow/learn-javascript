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

The `pop` function also returns the item that was removed.

```js
const array = ['a', 'b', 'c'];
const removed = array.pop() // array is now ['a', 'b'], removed is 'c'
```

### shift()

<div class="warning">

The shift function suffers from poor performance as as the entire array is 
re-indexed behind the scenes.

</div>

### indexOf()

### includes()

### slice()

### splice()

### join()

<div class="note">

Later on we will learn about some more useful array functions such as `map`, 
`reduce`, `filter`, and `sort`.

</div>