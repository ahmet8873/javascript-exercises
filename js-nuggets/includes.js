const products = [
  {
    title: "laptop",
    company: "apple",
  },
  {
    title: "galaxy s22",
    company: "samsung",
  },
  {
    title: "iphone 8",
    company: "apple",
  },
  {
    title: "iphone 9",
    company: "apple",
  },
];

const text = "ap";

const filtered = products.filter((item) => item.company.includes(text));
console.log(filtered);

// array includes

const grocesries = [" apple", " banana", " cherry", " orange", " pineapple"];

let randomItem = "lemon";

const isIncluded = grocesries.includes(randomItem);
console.log(isIncluded); //false
