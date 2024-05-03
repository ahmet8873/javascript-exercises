// given a string and return the most used characters in the string
// maxChar("hello") // "l"
// maxChar("javascript") // "a"
function maxChar(text) {
  const charMap = {};
  for (let char of text) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  let max = 0;
  let maxChar = null;
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar("hello"));

// use for in loop to iterate through the objects
// use for of loop to iterate through the arrays
