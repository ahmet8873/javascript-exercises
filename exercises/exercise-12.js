// capitalize the first letter of each word in a string
function capitalizeFirst(text) {
  let words = text.split(" ");
  let capitalizedWords = [];
  for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedWords.push(word);
  }
  return capitalizedWords.join(" ");
}
console.log(capitalizeFirst("hello my name is peter"));
