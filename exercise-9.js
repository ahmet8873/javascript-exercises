// write a function that returns the vowel numbers in a string
//examples
// vowels('webmaster') => 3

function vowels(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowels("webmaster"));

// second solution
function vowels2(text) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(vowels2("webmaster"));
