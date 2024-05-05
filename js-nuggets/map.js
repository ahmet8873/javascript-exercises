//map returns a new array
//doesn't change the size of the orriginal array
// you can get the index of the array

const people = [
  {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
  },
  {
    name: "Jason",
    age: 20,
    address: {
      city: "paris",
      country: "france",
    },
  },
  {
    name: "kane",
    age: 33,
    address: {
      city: "london",
      country: "england",
    },
  },
  {
    name: "ahmet",
    age: 34,
    address: {
      city: "istanbul",
      country: "turkey",
    },
  },
  {
    name: "joseph",
    age: 36,
    address: {
      city: "barcelona",
      country: "spain",
    },
  },
];

let cities = people.map((person) => {
  return person.address.city;
});

let cities2 = people.map((person, index) => {
  return person.address.city + " " + index;
});

let newPeople = people.map((person) => {
  return {
    name: person.name,
    city: person.address.city.toUpperCase(),
  };
});

// how to display names of people in a div
const listDiv = document.querySelector("div");

people.map((person) => {
  listDiv.innerHTML += `<p>${person.name}</p>`;
});
//or
const peopleList = people.map((person) => `<p>${person.name}</p>`);
listDiv.innerHTML = peopleList;

// forEach method
const listDiv2 = document.querySelector("div");

people.forEach((person) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = person.name;
  listDiv.appendChild(paragraph);
});
