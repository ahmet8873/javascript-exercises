const people = [
  {
    name: "John",
    location: {
      street: "123 Main St",
      timeZone: {
        offset: "-5:00",
      },
    },
  },
  {
    name: "Jason",
    location: {
      street: "456 Main St",
    },
  },
  {
    name: "kane",
    location: {
      street: "789 Main St",
      timeZone: {
        offset: "+7:00",
      },
    },
  },
];

people.forEach((person) => {
  //   console.log(person.location.timeZone.offset);  cannot read property offset of undefined
});

//optional chaining
people.forEach((person) => {
  console.log(person?.location?.timeZone?.offset || "default value");
});
