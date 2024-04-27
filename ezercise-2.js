//arithmetic, geometric or no pattern
// no negative numbers
function mathSequences(arr) {
  let arithmetic = new Set();
  let geometric = new Set();

  for (let i = 0; i < arr.length - 1; i++) {
    let number1 = arr[i + 1] - arr[i];
    arithmetic.add(number1);
    let number2 = arr[i + 1] / arr[i];
    geometric.add(number2);
  }
  if (arithmetic.size === 1) {
    return "arithmetic";
  }
  if (geometric.size === 1) {
    return "geometric";
  }
  return "none";
}
console.log(mathSequences([6, 7, 8, 9, 10]));
console.log(mathSequences([1, 2, 8, 9, 10, 11]));
console.log(mathSequences([2, 4, 8, 16, 32]));
