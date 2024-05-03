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
