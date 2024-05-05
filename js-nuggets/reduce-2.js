const cart = [
  {
    title: "laptop",
    price: 1000,
    amount: 5,
  },
  {
    title: "galaxy s22",
    price: 2000,
    amount: 2,
  },
  {
    title: "iphone 8",
    price: 3000,
    amount: 1,
  },
  {
    title: "iphone 9",
    price: 4000,
    amount: 3,
  },
  {
    title: "iphone 10",
    price: 5000,
    amount: 4,
  },
  {
    title: "iphone 15",
    price: 6000,
    amount: 1,
  },
];

let total = cart.reduce(
  (acc, curr) => {
    acc.cartTotal += curr.price * curr.amount;
    acc.totalItems += curr.amount;
    return acc;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);
console.log(total);

// accumulator is the object we return!!
