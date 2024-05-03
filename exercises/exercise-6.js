// given an array and chunk size , divide the array into many subarrays
// examples
// chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7], 3) // [[1, 2, 3], [4, 5, 6], [7]]

function chunk(arr, size) {
  let chunkedArray = [];
  let index = 0;
  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
}

console.log(chunk([1, 2, 3, 4, 5], 2));
