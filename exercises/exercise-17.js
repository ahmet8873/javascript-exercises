// return the second biggest value in an array

function secondBiggest(array) {
  let sortedArray = array.sort((a, b) => b - a);
  return sortedArray[1];
}
// console.log(secondBiggest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// return the first number with most repeats in an array
function repeats(arr) {
  let newObj = arr.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : (acc[curr] = 1);
    return acc;
  }, {});
  max = 0;
  maxvalue = "";
  for (let key in newObj) {
    if (newObj[key] > max) {
      max = newObj[key];
      maxvalue = key;
    }
  }
  return maxvalue;
}

console.log(repeats([1, 1, 1, 4, 5, 6, 3, 4, 5, 1, 4, 7, 9, 4]));
