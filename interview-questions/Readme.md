# Javascript Interview Questions

### what is javascript? what is the role of javascript engine?

Javascript is a programming language that is used for converting static web pages to interactive and dynamic web pages
A Javascript engine a program present in web browsers that can execute Javascript code.

### what is client side and server side ?

A client is a device ,aplication or software component that request or consumes services or resources from a server.

A server is a device , computer or software application that provides services, resources or functions to a clients.

### what is scope in javascript?

Scope determines where a variable is defined and can be accessed.

##### Global Scope:

Variables declared outside of any function or block have global scope. These variables are accessible from anywhere within your code, including inside functions and blocks.

##### Function Scope:

Variables declared within a function have function scope. They are accessible only within the function where they are declared.

##### Block Scope:

With the introduction of ES6 (ECMAScript 2015), JavaScript also supports block-scoped variables declared using let and const. Block scope refers to the visibility of variables within curly braces {} blocks, such as if, for, and while statements.
Block-scoped variables (declared using let or const) are accessible only within the block where they are declared.

```js
// global - accessible anywhere
let globalVar = "global";

function greet() {
  let functionVariable = "function";
  if (true) {
    let blockVariable = "block";
  }
}
greet();
```

In JavaScript, variables declared with the var keyword are function-scoped, not block-scoped. This means that they are accessible throughout the entire function where they are declared, regardless of block boundaries. However, they are not accessible outside of the function where they are defined.

````js
function myFunction() {
    if (true) {
        var blockScopedVar = 'I am a block-scoped variable (declared with var)';
        console.log(blockScopedVar); // Accessible here
    }

    console.log(blockScopedVar); // Accessible here
}

console.log(blockScopedVar); // Not accessible here
    ```
````

### what is the type of a variable in Javascript it is declared without using var , let , const keywords?

var is the implicit type of a variable when it is declared without using var , let , const keywords.

### what is the Hoisting in Javascript?

This means that regardless of where variables and functions are declared within their scope, they are accessible (though not necessarily initialized) from the start of the code block.
However, it's important to note that only the declarations are hoisted, not the initializations. Here's how hoisting works for variables and functions:

```js
// function hoisting
hoisting();

function hoisting() {
  console.log("hoisting");
}
```

However, it's important to understand that hoisting applies only to declarations, not initializations. For example:

```js
console.log(x); // Output: undefined
var x = 5;
```

In this case, var x; is hoisted, but x is not initialized until later in the code. So, when console.log(x); is executed, x exists in the scope, but its value is undefined until it is assigned 5.

##### Hoisting with let or const:

Variables declared with let are hoisted to the top of their block scope, but unlike var, they are not initialized. This means that accessing a let variable before its declaration (i.e., in the temporal dead zone) will result in a ReferenceError.

```js
console.log(x); // ReferenceError: x is not defined
let x = 5;
```

while let and const variables are hoisted to the top of their block scope like var, they exhibit different behavior when accessed before their declaration. Accessing a let or const variable before its declaration results in a ReferenceError, while accessing a var variable in a similar scenario results in undefined.

### what is JSON?

JSON is a JavaScript Object Notation. It is A lightweight data interchange format.Consist of key value pairs.

```js
{
  "name": "John",
  "age": 30,
  "city": "New York",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY"
  }

}
```

### what are variables in javascript? Differences between var , let and const keywords

variables are used to store data in javascript.

var creates a function scoped variable
let creates block scoped variable
const creates block scoped variable. It can't be reassigned

```js
function myFunction() {
  if (true) {
    var count = 10;
    console.log(count); // Accessible here
  }
  console.log(count); //accessible here
}
myFunction();
```

```js
function myFunction() {
  if (true) {
    let count = 10;
    console.log(count); // Accessible here
  }
  console.log(count); // Not accessible here ,ReferenceError: count is not defined
}
myFunction();
```

### data types in javascript

##### Primitive Data Types:

Primitive data types are immutable and represent single values. They are directly stored in memory and are passed by value. In JavaScript, there are six primitive data types:

Number: Represents numeric values, including integers and floating-point numbers.
String: Represents textual data, enclosed within single (') or double (") quotes.
Boolean: Represents a logical value, either true or false.
Undefined: Represents a variable that has been declared but not assigned a value.
Null: Represents the intentional absence of any value.
Symbol: Introduced in ECMAScript 6 (ES6), represents unique identifiers.

```js
let num = 10; // Number
let str = "Hello, world!"; // String
let bool = true; // Boolean
let undef = undefined; // Undefined
let n = null; // Null
let sym = Symbol("foo"); // Symbol
```

Example usage of object data types:

```js
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array
let func = function () {
  console.log("Hello!");
}; // Function
let date = new Date(); // Date
let regex = /[a-z]+/; // RegExp
```

### what is the difference between null and undefined?

null: It represents the intentional absence of any value or the absence of a value that has been explicitly set or assigned.

undefined: It represents a variable that has been declared but has not been assigned a value, or an object property that does not exist or has not been assigned a value.

```js
let undefinedVar;
let nullVar = null;
console.log(undefinedVar); // undefined
console.log(nullVar); // null
```

### what is the use of typeof operator in javascript?

typeof operator is used to check the data type of a variable.
real application use => typeof operator can be used to validate the data received from external sources.

### what is type coercion in javascript?

Type coercion is the automatic conversion of values from one data type to another during certain operations or comparisons in JavaScript.

```js
console.log(1 + "2"); // "12"
console.log(true + 2); // 3

console.log("1" == 1); // true
console.log(null + 1); // 1
```

### what is operator precedence in javascript

Operator precedence determines the order in which operators are evaluated in an expression when there are multiple operators present. Operators with higher precedence are evaluated first, followed by operators with lower precedence.

### short circuit evaluation in javascript

logical AND , logical OR

```js
let result1 = false && someFunction();
console.log(result1); // false

let result2 = true || someFunction();
console.log(result2); // true
```

### types of condition statements in javascript

if/else, switch, ternary operator

```js
let x = 10;

if (x > 0) {
  console.log("x is positive");
} else if (x < 0) {
  console.log("x is negative");
} else {
  console.log("x is zero");
}
```

```js
switch (x) {
  case 0:
    console.log("x is zero");
    break;
  case 10:
    console.log("x is ten");
    break;
  default:
    console.log("x is neither zero nor ten");
}
```

```js
let y = 10;
let result = y > 0 ? "y is positive" : "y is negative";
console.log(result); // "y is positive"
```

### what is the difference between == (equality operator) and === (strict equality operator)?

== (equality operator) checks for value equality, while === (strict equality operator) checks for both value and data type equality.

equality operator == compares two values for equality after performing type coercion. strict equality operator === compares two values for equality without type coercion.

```js
let x = 5;
let y = "5";
console.log(x == y); // true
console.log(x === y); // false
```

### Spread operator in javascript

Spread operator (...) is used to expand an array or object into individual elements.

```js
let arr1 = [1, 2, 3];
console.log(...arr1); // 1 2 3
```

uses of spread operator

```js
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
```

```js
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]
```

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3); // { a: 1, b: 2, c: 3, d: 4 }
```

```js
let arr4 = [1, 2, 3];
let arr5 = [...arr4, 4, 5, 6];
console.log(arr5); // [1, 2, 3, 4, 5, 6]
```

```js
const numbers = [1, 2, 3];

function add(a, b, c) {
  console.log(a + b + c);
}
add(...numbers); // 6

const numbers2 = [4, 5, 6, 4, 5, 6];
add(...numbers2); // 15
```

### Rest operator in javascript

The Rest operator is used in a function parameters to collect all remaining arguments into an array.

```js
function sum(a, b, ...rest) {
  console.log(rest);
}
sum(1, 2, 3, 4, 5, 6); // [3, 4, 5, 6]
sum(1, 2, 3, 4, 5, 6, 7, 8, 9); // [3, 4, 5, 6, 7, 8, 9]
```

### what are arrays and how to add , remove and access elements in an array?

an array is a data type in javascript that is used to store multiple values in a single variable.

```js
const array = [1, 2, 3];
array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]
```

```js
const array = [2, 3];
array.unshift(0, 1);
console.log(array); // Output: [0, 1, 2, 3]
```

```js
const array = [1, 2, 3];
const removedElement = array.pop();
console.log(removedElement); // Output: 3
console.log(array); // Output: [1, 2]
```

```js
const array = [0, 1, 2];
const removedElement = array.shift();
console.log(removedElement); // Output: 0
console.log(array); // Output: [1, 2]
```

```js
const array1 = [1, 2];
const array2 = [3, 4];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4]
```

```js
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]
```

```js
//filter() method creates a new array with all elements that pass the test implemented by the provided function
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

```js
const arr = [1, 2, 3, 4, 5];
let indexNum = arr.indexOf(3);
console.log(indexNum); // Output: 2
```

```js
//find() method gets the first element that satisfies the provided testing function
const arr = [1, 2, 3, 4, 5];
let indexNum = arr.find((num) => num > 3);
console.log(indexNum); // Output: 4
```

```js
// slice() method extracts a section of an array and returns a new array from start index to end index ( end index is not included )
const arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr); // Output: [1, 2, 3]
```

```js
//splice() method changes the contents of an array by removing existing elements and/or adding new elements
array.splice(startIndex, howmany, ...itemsToAdd);
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1, "a", "b", "c");
console.log(arr); // Output: [1, 2, "a", "b", "c", 4, 5]
```

```js
// forEach() method executes a provided function once for each array element and does not return any value
const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => console.log(num * 2));
// Output: 2 4 6 8 10
```

```js
// sort() method sorts the elements of an array in ascending order
const arr = [5, 2, 8, 1, 9];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 5, 8, 9]

const arr2 = ["a", "b", "z", "d"];
arr2.sort();
console.log(arr2); // Output: ['a', 'b', 'd', 'z']
```

```js
// reverse() method reverses the elements of an array
const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]
```

```js
const arr = "some string";
console.log(arr.split("").reverse().join(""));
// Output: gnirts esom
```
