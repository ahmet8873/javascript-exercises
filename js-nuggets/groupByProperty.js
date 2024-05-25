function groupByProperty(arr, propertyName) {
  return arr.reduce((acc, curr) => {
    const propertyValue = curr[propertyName];
    if (!acc[propertyValue]) {
      acc[propertyValue] = [];
    }
    acc[propertyValue].push(curr);
    return acc;
  }, {});
}

const objects = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.log(groupByProperty(objects, "age"));
