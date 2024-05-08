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
// doesnt change the original array
const arr = [1, 2, 3, 4, 5];
let newArr = arr.slice(0, 3);
console.log(newArr); // Output: [1, 2, 3]
```

```js
//splice() method changes the contents of an array by removing existing elements and/or adding new elements
// changes the original array
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

### array destructuring

array destructring us to extract elements from an array and assign them to variables

```js
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // Output: 1 2 3
```

### array-like objects

array-like objects are objects that have indexed elements and a length property , similar to arrays but they may not have all the methods like push, pop, shift, and unshift

```js
const str = "hello";
console.log(str.length); // Output: 5
console.log(str[0]); // Output: "h"
```

In JavaScript, the "argument object" refers to a special object that is automatically available inside all functions. This object contains an array-like structure that holds all the arguments passed to the function when it is invoked.

```js
function myFunction() {
  console.log(arguments);
}
myFunction(1, 2, 3);
// Output: [1, 2, 3]
```

```js
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
```

arrow functions in JavaScript do not have their own arguments object. The arguments object is only available inside regular functions, not arrow functions!!!

```js
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(1, 2, 3)); // Output: 6
```

### how to convert an array-like object to an array

```js
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Array.from(obj);
console.log(arr); // Output: ["a", "b", "c"]
```

```js
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Object.keys(obj);
console.log(arr); // Output: ["0", "1", "2", "length"]
```

```js
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Object.values(obj);
console.log(arr); // Output: ["a", "b", "c", 3]
```

```js
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Object.entries(obj);
console.log(arr); // Output: [["0", "a"], ["1", "b"], ["2", "c"], ["length", 3]]
```

### what is a loop in js and what are the types of loops?

a loop is a programming way to run a piece of code repeatedly until a certain condition is met.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

```js
while (condition) {
  // code
}
```

```js
do {
  // code
} while (condition);
```

```js
for (let item of arr) {
  console.log(item);
}
```

```js
for (let item in arr) {
  console.log(item);
}

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key + ": " + obj[key]);
} // Output: a: 1, b: 2, c: 3
```

for objects you can use for in loop to iterate through the object keys

### Arrays ->for in loop and for of loop

if you use for in loop to iterate through the array, you will get the index of the array element
if you use for of loop to iterate through the array, you will get the value of the array element

```js
const arr = [1, 3, 5, 6, 7, 7, 8, 9, 3];

for (let i in arr) {
  console.log(i); // Output: 0, 1, 2, 3, 4, 5, 6, 7, 8
}

for (let i of arr) {
  console.log(i); // Output: 1, 3, 5, 6, 7, 7, 8, 9, 3
}
```

### objects ->for in loop and for of loop

if you use for in loop to iterate through the object, you will get the key of the object element

you cannot use for of loop directly to iterate through the object. you have to use Object.keys() or Object.values() or Object.entries()

```js
const obj = { a: 1, b: 3, c: 5, d: 6, e: 7, f: 7, g: 8, h: 9, i: 3 };
for (let i in obj) {
  console.log(i); // Output: a, b, c, d, e, f, g, h, i
}
for (let i of Object.keys(obj)) {
  console.log(i); // Output: a, b, c, d, e, f, g, h, i
}
```

### what is the difference between break and continue in javascript?

break and continue statements can be used to exit or skip the current iteration of a loop.

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // Output: 0, 1, 2, 3, 4
}
```

you cannot use break in forEach loop

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```

### what are the functions in javascript? what are the types of functions in javascript?

a function is reusable block of code that performs a specific task.
named function, anonymous function, arrow function..

### function expression

a function expression is a function that is assigned to a variable or passed as an argument to another function.

```js
const add = function (a, b) {
  return a + b;
};
```

### arrow function

```js
const add = (a, b) => a + b;
```

### callback function - higher order function

a callback function is a function that is passed as an argument to another function.

a higher order function is a function that takes another function as an argument or returns a function.

```js
function display(a, b, operation) {
  return operation(a, b);
}
//display is a higher order function and operation is a callback function
```

```js
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
//createAdder is a higher order function , Returns a function as a result
```

### what is parameters and arguments in javascript?

Parameters are placeholders that are defined inside a function.
Arguments are values that are passed to a function when it is called.

### how do you use default parameters in javascript?

default parameters allows you to provide a default value for a parameter if no value is provided.

```js
function add(a, b = 0) {
  return a + b;
}
```

### event handling in javascript

event handling is the process of listening to an event and executing a function when the event occurs.

```js
const button = document.querySelector("button");
button.addEventListener("click", function () {
  console.log("Button clicked");
});
```

### template literals in javascript

template literals allow you to write strings that contain expressions.

```js
const name = "John";
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "Hello, my name is John and I am 30 years old."
```

```js
let multilineString = `This is
a multiline
string`;
console.log(multilineString); // Output: "This is\na multiline\nstring"
```

### difference between expression and statement in javascript

expressions produce values and can be part of statements
example: 1 + 2

A statement is a complete unit of code that performs a specific action.
example: console.log("Hello, World!");

### DOM methods in javascript - selectors

DOM stands for Document Object Model. It is a representation of an HTML document that can be manipulated using JavaScript.

selecting dom elements
selectors in JS help to get specific elements from the DOM based on IDs, classes, and other attributes.

```js
const element = document.getElementById("myElement");
const elements = document.getElementsByClassName("myClass");
const elements = document.getElementsByTagName("div");
const element = document.querySelector("#myElement");
const elements = document.querySelectorAll(".myClass");
const elements = document.querySelectorAll('[data-role="button"]');

const elementWithinContext = contextElement.querySelector(".myClass");
const elementsWithinContext = contextElement.querySelectorAll("div");
```

### what are the methods to modify elements in javascript?

```js
element.innerHTML = "<p>New content</p>";
element.innerHTML = "<p>New content</p>";
element.setAttribute("class", "newClass");
const className = element.getAttribute("class");
element.classList.add("newClass");
element.classList.remove("oldClass");
element.classList.toggle("active");
const hasClass = element.classList.contains("someClass");
element.style.color = "red";
parentElement.appendChild(newChild);
parentElement.removeChild(childElement);
const newElement = document.createElement("div");
```

### what is the difference between innerHtml and textContent in javascript?

The innerHTML and textContent properties are both used to manipulate the content of HTML elements, but they have different behaviors:

```js
<div id="example"></div>;

const element = document.getElementById("example");

// Using innerHTML
element.innerHTML = "<strong>Hello</strong> <em>world</em>";

// Using textContent
element.textContent = "Hello world";
```

In summary, use innerHTML when you need to manipulate HTML content, including tags, and use textContent when you only need to deal with plain text content without any HTML interpretation.

### what is the difference between createElement and createTextNode in javascript?

createTextNode method is used to create text node for existing elements

```js
const textNode = document.createTextNode("Hello, World!");
parentElement.appendChild(textNode);

const element = document.createElement("div");
```

### what is error handling in javascript?

Error handling is the process of catching and handling exceptions that may occur during the execution of a program.

```js
try {
  // Code that may throw an exception
} catch (error) {
  // Code to handle the exception
} finally {
  // Code that will always be executed regardless of whether an exception is thrown or not
}
```

Throw new Error() statement is used to throw an error.Stops the execution of current function and passes the error to catch block of calling function

Error propagation is the process of propagating an error from one part of the code to another by using the Throw statement.

### error types in js

```js
// The generic error type. It serves as the base type for all other error types. You can create instances of this type to throw generic errors.
throw new Error("Something went wrong");
```

```js
// SyntaxError: Indicates a syntax error in the code. This typically occurs when the JavaScript engine encounters code that violates the language syntax rules.
throw new SyntaxError("Invalid syntax");
```

```js
// ReferenceError: Indicates that an invalid reference was made, typically when trying to access a variable that has not been declared or is not in scope.
throw new ReferenceError("Variable is not defined");
```

```js
//TypeError: Indicates that an operation was performed on a value of the wrong type. This often occurs when trying to access properties or call methods on undefined or null values.
throw new TypeError('Cannot read property "x" of undefined');
console.log(number.upperCase()); // TypeError: Cannot read property 'upperCase' of undefined
```

```js
// RangeError: Indicates that a value is out of the expected range. This typically occurs when trying to access an array or string index that is out of bounds.
const array = [1, 2, 3];
array[3] = 4; // RangeError: Index out of range
```

### what is object in javascript?

In JavaScript, an object is a complex data type that allows you to store collections of data and functionality in key-value pairs. Objects are one of the most fundamental concepts in JavaScript and are used extensively in the language.

Dot Notation and Bracket Notation: You can access and manipulate properties of an object using dot notation (object.property) or bracket notation (object['property']).

### in how many ways can we create object in javascript?

```js
// 1. Object literal
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// 2. Object constructor
const person = new Object();
person.name = "John";
person.age = 30;
person.city = "New York";

//3. constructor function
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}
let person = new Person("John", 30, "New York");

// 4. Object.create
const person = Object.create({
  name: "John",
  age: 30,
  city: "New York",
});
```

### differences between arrays and objects in javascript

arrays are collection of values

objects are collection of key value pairs

arrays are denoted by []

objects are denoted by {}

elements in arrays are ordered by index

elements in objects are unordered

### add , modify and delete properties in object

```js
const person = {
  name: "John",
  age: 30,
};
person.name = "Jane";
person.city = " New York";
person["new property"] = "new value";
delete person.city;

console.log(person["new property"]);
console.log(person["age"]);
```

### how to check if a property exist in an object

```js
const person = {
  name: "John",
  age: 30,
};
console.log("name" in person); // Output: true
console.log("address" in person); // Output: false

console.log(person.hasOwnProperty("name")); // Output: true

console.log(person.name !== undefined); // Output: true
```

### what are events in javascript? how an event can be triggered in javascript?

user intearcts with the web page (click)
an event occurs
a piece of js code is executed in response
the page is updated or modified

### what is event object in javascript?

```js
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  console.log(event);
  console.log(event.target);
  console.log(event.type);
});
```

### event delegation in javascript

event delegation is a technique that allows you to listen to events on parent elements and then trigger the same event on child elements.So we dont have to add event listener to all the child elements

```js
const parent = document.querySelector(".parent");
parent.addEventListener("click", handleClick);
function handleClick(event) {
  let target = event.target;
  console.log(target.textContent);
}
```

### event bubbling

bubbling is when an event is triggered on an element and then on its parent element until it reaches the top level of the DOM tree. It propagates up the DOM tree until it reaches the top level.

```js
<div class="parent">
  <div class="child">
    <button class="grandchild"></button>
  </div>
</div>
```

### how to stop event propagation or bubbling in javascript

```js
const grandchild = document.querySelector(".grandchild");
grandchild.addEventListener("click", function (event) {
  event.stopPropagation();
});
```

### EVENT LOOP

It manages the execution of code by prioritizing tasks and ensuring that asynchronous operations, such as fetching data from a server or handling user interactions, are handled efficiently without blocking the main thread. It continuously monitors the call stack for tasks to execute, and when it's empty, it checks the callback queue for pending tasks and moves them to the call stack for execution. This cycle repeats indefinitely, allowing JavaScript to handle multiple tasks concurrently while remaining responsive.

### http response status codes

- 1xx Informational
- 2xx Success
- 3xx Redirection
- 4xx Client Error
- 5xx Server Error

### get dimensions of an element in javascript

getBoundingClientRect() returns the size of an element and its position relative to the viewport.

```js
const rect = element.getBoundingClientRect();
```

### how to delete a value in an array

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);
```

```js
delete arr[2];
```

```js
arr = arr.filter((item) => item !== 3);
```

### how to reverse a string in javascript

```js
let str = "hello";
let reversedStr = str.split("").reverse().join("");
console.log(reversedStr); // Output: "olleh"
```

### new Set() delete(value) , add(value), clear() , has(value)

```js
let arr = [1, 2, 3, 4, 5, 5, 5, 3, 2];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
uniqueArr.add(6);
uniqueArr.delete(5);
uniqueArr.clear(); //removes all items
uniqueArr.has(2); //returns true or false
```

### how to find a value exist in an array

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // Output: true
```

```js
console.log(arr.indexOf(3) !== -1); // Output: true
```
