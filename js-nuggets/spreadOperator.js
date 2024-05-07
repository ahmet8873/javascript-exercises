//splits array into individual elements
// copying the values , not referencing them

const udemy = "udemy";
let letters = [...udemy];
console.log(letters); // ["u", "d", "e", "m", "y"]

const boys = ["john", "peter", "jack"];
const girls = ["susan", "sophia"];
const bestfriend = "arnold";

const friends = [boys, girls, bestfriend];
console.log(friends); //nested array  [["john", "peter", "jack"], ["susan", "sophia"], "arnold"]

const friends2 = [...boys, ...girls, bestfriend];
console.log(friends2); // ["john", "peter", "jack", "susan", "sophia", "arnold"]

//reference
// const newFriends = friends2;
// newFriends[0] = "ahmet";
// console.log(friends2);
// console.log(newFriends);

// they will both have 'ahmet' in the zero index, but if I spread it it will not change the original array

const newFriends2 = [...friends2];
newFriends2[0] = "ahmet";
console.log(friends2);
console.log(newFriends2);

//objects
const person = {
  name: "john",
  age: 30,
};

const newPerson = { ...person, city: "new york" };
console.log(newPerson);
