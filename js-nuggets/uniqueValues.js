const menu = [
  {
    name: "Baja Taco",
    category: "Mexican",
  },
  {
    name: "Burrito",
    category: "Mexican",
  },
  {
    name: "Bowl",
    category: "Mexican",
  },
  {
    name: "Quesadilla",
    category: "Mexican",
  },
  {
    name: "Spagetti",
    category: "italian",
  },
  {
    name: "Fried Rice",
    category: "Chinese",
  },
  {
    name: "Sushi",
    category: "Japanese",
  },
  {
    name: "Pad Thai",
    category: "Thai",
  },
  {
    name: "Pho",
    category: "Vietnamese",
  },
  {
    name: "Ramen",
    category: "Japanese",
  },
  {
    name: "Pancakes",
    category: "American",
  },
];

const categories = menu.map((item) => {
  return item.category;
});

const uniqueCategories = [...new Set(categories)];

//shorter way
const uniqueCategories2 = [...new Set(menu.map((item) => item.category))];

// add 'All' category

const uniqueCategories3 = [
  "All",
  ...new Set(menu.map((item) => item.category)),
];
