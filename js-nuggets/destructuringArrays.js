const fruits = ["apple", "banana", "cherry"];
const friends = ["john", "jane", "jack"];

let fruit1 = fruits[0];

// destructuring
const [a, b, c] = fruits;
const [x] = friends;

console.log(x); //john
console.log(b); //banana

const [, , d] = fruits;
console.log(d); //cherry

const [e, ...rest] = friends;
console.log(rest); // [ 'jane', 'jack' ]
console.log(e); //john

//-----------------
let first = "john";
let second = "jane";

let temp = second;
second = first;
first = temp;

//destructuring
[second, first] = [first, second];
