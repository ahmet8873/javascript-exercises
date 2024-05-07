const bob = {
  firstName: "bob",
  lastName: "smith",
  age: 25,
  address: {
    city: "london",
    country: "england",
  },
};

const firstName = bob.firstName;
const city = bob.address.city;
console.log(firstName, city);

// destructuring
const {
  firstName: f,
  lastName,
  address: { city: c },
} = bob;
console.log(f, c, lastName);

function printPerson(person) {
  const {
    firstName,
    lastName,
    address: { city, country },
  } = person;
  console.log(firstName, lastName, city, country);
}
printPerson(bob);

//-----

function printPerson2({ firstName, lastName, address: { city, country } }) {
  console.log(firstName, lastName, city, country);
}
printPerson2(bob);
