//A callback function in JavaScript is a function that is passed as an argument to another function and is executed after a particular event or task completes.
//array methods , setTimeout,event listeners

function makeUppercase(value) {
  console.log(value.toUpperCase());
}
function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function handleName(name, callback) {
  const fullName = `${name} Smith`;
  callback(fullName);
}

// handleName("John", makeUppercase());  you cannot invoke it directly
handleName("John", makeUppercase);
handleName("John", reverseString);
handleName("Susan", function (value) {
  console.log(value);
});
handleName("Ahmet", (value) => console.log(value));

const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log("clicked");
}); // there is a logic behind addEventListener, like in the handleName function
