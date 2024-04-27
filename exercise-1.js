// Write a function that takes a text as input and returns the first longest word found within the text. The function should consider a 'word' as any sequence of characters separated by spaces or punctuation marks. If there are multiple longest words with the same length, the function should return the one that appears first in the text.

function longestWord(text) {
  let words = text.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
