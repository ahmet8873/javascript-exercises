//unique values in the array
let products = [
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
  {
    title: "iphone 10",
    company: "apple",
  },
  {
    title: "iphone 15",
    company: "apple",
  },
  {
    title: "galaxy s21",
    company: "samsung",
  },
];

function uniqueCompanies(arr) {
  tempArr = arr.map((item) => item.company);
  let uniqueArr = [...new Set(tempArr)];
  return uniqueArr;
}

console.log(uniqueCompanies(products));
