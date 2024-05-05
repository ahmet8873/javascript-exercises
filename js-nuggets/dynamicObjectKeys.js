// dot notation
const person = {
  name: "John",
  age: 30,
};

console.log(person.name); // Output: "John"

// square bracket notation
const item = {
  "featured-items": ["item1", "item2", "item3"],
};

console.log(item["featured-items"]); // Output: ["item1", "item2", "item3"]
console.log(person["name"]); // Output: "John"

//dynamic keys
let appState = "loading";
let keyName = "computer";

const app = {
  [appState]: true,
};

app[keyName] = "macbook";
// app.computer = "macbook";

console.log(app); // Output: { loading: true, computer: "macbook" }

//-----------------------------
const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, value) {
  state[key] = value;
}

updateState("name", "john");
updateState("job", "developer");
updateState("loading", false);
updateState("products", ["apple", "orange", "banana"]);
console.log(state); // Output: { loading: false, name: "john", job: "developer", products: ["apple", "orange", "banana"] }
