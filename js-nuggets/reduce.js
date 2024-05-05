// iterates , callback function
//reduces to  single value (object,array,number)
//(acc)=> accumulator ,total of all calculations
//(val, curr)=> current iteration value

const staff = [
  {
    name: "John",
    salary: 1000,
    age: 30,
    position: "developer",
  },
  {
    name: "Jason",
    salary: 2000,
    age: 20,
    position: "manager",
  },
  {
    name: "ahmet",
    salary: 3000,
    age: 33,
    position: "developer",
  },
  {
    name: "kane",
    salary: 4000,
    age: 36,
    position: "developer",
  },
  {
    name: "jack",
    salary: 5000,
    age: 38,
    position: "developer",
  },
];

const totalSalary = staff.reduce((acc, val) => {
  acc = acc + val.salary;
  return acc;
}, 0);
// console.log(totalSalary);

const totalAge = staff.reduce(
  (acc, val) => {
    acc += val.age;
    return acc;
  },
  { name: "total ages", age: 0 }
);

// You can use the reduce() method on objects in JavaScript, but with some considerations. While reduce() is typically used with arrays, you can also use it with objects to iterate over their keys and values and accumulate a single result. However, you need to convert the object to an array of key-value pairs using methods like Object.entries() or Object.keys() first.
const obj = { a: 1, b: 2, c: 3 };

const result = Object.entries(obj).reduce((accumulator, [key, value]) => {
  return accumulator + value;
}, 0);

console.log(result); // Output: 6 (1 + 2 + 3)
