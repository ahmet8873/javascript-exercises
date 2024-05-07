const udemy = "udemy";

console.log(Array.from(udemy)); // ["u", "d", "e", "m", "y"]

//for pagination
const items = Array.from({ length: 50 }, (_, index) => index);
let itemsPerPage = 11;
let pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  return items.slice(start, start + itemsPerPage);
});
console.log(newItems);
