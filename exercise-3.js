// given a string , return a string with the reversed order of letters

function reversedLetters(text) {
  let reversed = text.split("").reverse().join("");
  return reversed;
}
console.log(reversedWords("hello"));

// given a string , return a string with the reversed order of words
function reversedWords(text) {
  let words = text.split(" ");
  let reversed = words.reverse().join(" ");
  return reversed;
}

console.log(reversedWords("hello world my name is peter"));

// given a number , return a number with the reversed order of digits , if it is negative return negative number

function reversedDigits(number) {
  let digits = number.toString().split("").reverse().join("");
  if (number < 0) {
    return -parseInt(digits);
  } else {
    return parseInt(digits);
  }
}
console.log(reversedDigits(-1234));
