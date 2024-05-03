// write a function takes an array and all the numbers summed up are equal to largest number in the array.
// example
//  console.log(arraySum([1,2,4,6,13]));
// 1 + 2 + 4 + 6 = 13 returns true

function arraySum(arr) {
  let tempArr = arr.sort((a, b) => a - b);
  let largest = tempArr.pop();

  return tempArr.reduce((acc, val) => acc + val, 0) === largest;
}

console.log(arraySum([1, 2, 4, 6, 13]));
