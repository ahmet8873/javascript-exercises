// gathers , collects items
// rest is when we declare a function , spread is when we invoke a function
const fruits = ["apple", "banana", "cherry", "orange", "pineapple"];

const [first, second, ...rest] = fruits;
console.log(first); //apple
console.log(second); //banana
console.log(rest); //["cherry", "orange", "pineapple"]

//objects
const person = {
  name: "john",
  age: 30,
  city: "new york",
};

const { name, ...rest2 } = person;
console.log(name); //john
console.log(rest2); //{ age: 30, city: 'new york' }

const { age, ...rest3 } = person;
console.log(age); //30
console.log(rest3); //{ name: 'john', city: 'new york' }

//functions

const getAvarage = (name, ...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return {
    name,
    avarage: sum / args.length,
  };
};

console.log(getAvarage("john", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //{ name: 'john', avarage: 5,5 }

// using reduce()
const getAvarage2 = (name, ...args) => {
  return {
    name,
    avarage: (args.reduce((acc, curr) => acc + curr) / args.length).toFixed(2),
  };
};
console.log(getAvarage2("kane", 80, 76, 35));

//if we have an array of scores we have to pass it using spread operator
const testScore = [45, 67, 34, 56];
let result = getAvarage2("ahmet", ...testScore); //This is SPREAD OPERATOR
console.log(result);
