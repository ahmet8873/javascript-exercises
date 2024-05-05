// filter retuns new array , can manipulate the original array (unlike map)

//find returns single instance(object),returns first match, if no match returns undefined

const people = [
  {
    name: "John",
    age: 30,
    position: "developer",
  },
  {
    name: "Jason",
    age: 20,
    position: "manager",
  },
  {
    name: "ahmet",
    age: 33,
    position: "developer",
  },
  {
    name: "kane",
    age: 36,
    position: "developer",
  },
  {
    name: "jack",
    age: 38,
    position: "developer",
  },
];

const youngDevelopers = people.filter((person) => person.age <= 30);
console.log(youngDevelopers);

const developer = people.find((person) => person.position === "developer");
console.log(developer); // Output: { name: "John", age: 30, position: "developer" }

// no match filter
const seniorDevs = people.filter(
  (person) => person.position === "senior developer"
);
console.log(seniorDevs); // Output: []

// no match find
const seniorDev = people.find(
  (person) => person.position === "senior developer"
);
console.log(seniorDev); // Output: undefined

// filter always returns array , even if it returns single object
const john = people.filter((person) => person.name === "John");
console.log(john[0].position); // Output: developer
