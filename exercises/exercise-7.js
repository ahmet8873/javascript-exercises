// write a function accepts a string and capitalize the first letter of each word in the string
// capitalizeFirst('hello my name is peter') // 'Hello My Name Is Peter'

function capitalizeFirst(text) {
  let words = text.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeFirst("hello my name is peter"));

//use for of
function capitalizeFirst2(text) {
  let words = text.split(" ");
  let capitalizedWords = [];
  for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(word);
  }
  return capitalizedWords.join(" ");
}
console.log(capitalizeFirst2("hello my name is peter"));

//use map function
function capitalizeFirst3(text) {
  let words = text.split(" ");
  let capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}
console.log(capitalizeFirst3("hello my name is peter"));
