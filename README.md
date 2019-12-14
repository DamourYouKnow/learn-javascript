# Learn Javascript

## About
Learn JavaScript is a framework that allows educators to create tutorials for 
the JavaScript programming language that include interactive code editors 
and exercises.

## Setup
Ensure that NodeJS is installed - https://nodejs.org/en/download/

Install TypeScript as a global package:
```
npm install typescript -g
```

Install Learn JavaScript dependencies:
```
npm install
```

Create a development build:
```
npm run build
```

Start the local development server:
```
npm run start
```

Navigate to http://localhost:8080.

## Creating tutorials

Before creating tutorials, it is recommended that you have a basic 
understanding of the [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

To craete a lesson, start by creating a a directory under `public/lessons/` 
that will contain the files for your lesson. 

After creating a lesson directory, create a file named `lesson.md`. This is 
a Markdown file that you will use to define the content of your lesson.

After creating your lesson, add it to the navigation bar by adding a link to 
the lesson directory in the `index.html` file:
```html
<li>
    <a href="#hello-world" path="./lessons/hello-world/">Hello World</a>
</li>
```

### Adding code editors
Interactive code editors can be added to your lessons by declaring an HTML div 
element with the `editor` class:
```html
<div class="editor"></div>
```

The editor can be initialized with code by creating a JavaScript file in 
the lesson directory and adding the `source` attribute to the editor element:
```html
<div class="editor" source="hello_world.js"></div>
```

### Adding test cases
Test cases can be added to an editor by creating a JavaScript file in the 
lesson directory:

```js
describe('Your program', () => {
    it('should declare a function named volume', () => {
        assert.equals(
            typeof volume, 'function', 'The function volume was not declared');
    });
    it(
        'should return the volume of a box given its length, width, and height',
        () => {
            const result1 = volume(5, 10, 2);
            assert.equals(result1, 100, 'volume(5, 10, 2) does not return 100');

            const result2 = volume(2, 3, 4);
            assert.equals(result2, 24, 'volume(2, 3, 4) does not return 24');
        }
    );
});
```

This file should call the `describe` function. The first parameter is the title 
of what is being described and the second parameter is the function that 
contains its test cases.

Each test case is defined by calling the `it` function. The first parameter 
is a description of the test case and the second parameter is function 
containing a set of assertions.

The following assertion functions are available:

- assert.equals(expected, actual, message)
    - Passes if `expected === actual`
- assert.notEquals(expected, actual, message)
    - Passes if `expected !== actual`
- assert.ok(value, message)
    - Passes if `value == true`
- assert.fail(message)
    - Always fails

After defining your test cases you can simply add them to an editor element 
using the test attribute
```html
<div class="editor" source="exercise.js" test="exercise-test.js"></div>
```

### Adding notification boxes

The three types of notification boxes can be added by declaring an HTML div 
element with any of the following classes `note`, `warning`, or `tip`.

If the content of your notification is Markdown, add a blank line after the 
div element's opening tag, otherwise the elements content will be treated as 
HTML.

```html
<div class="note">

I am a note written in **Markdown!**
</div>

<div class="warning">
    I am a warning written in <strong>HTML</strong>
</div>
```

## Deployment
A production build can be created by running `npm run build-prod`. The contents 
of the `public/` directory can deployed to any server after the build is 
completed.