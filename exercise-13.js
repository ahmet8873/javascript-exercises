// return true if all values are unique

function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

// console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));

// use Set
function unique2(str) {
  let tempStr = new Set();
  for (let letter of str) {
    if (tempStr.has(letter)) {
      return false;
    }
    tempStr.add(letter);
  }
  return true;
}
console.log(unique2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(unique2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10]));
