// check to see if two provided strings are anagrams
// anagrams are strings that contain the same characters but in a different order
//  example: 'rail safety' and 'fairy tales' are anagrams

function anagrams(string1, string2) {
  const charmap1 = {};
  const charmap2 = {};
  string1 = string1.toLowerCase().replace(/[^\w\s]/gi, "");
  string2 = string2.toLowerCase().replace(/[^\w\s]/gi, "");
  for (let char of string1) {
    charmap1[char] = charmap1[char] + 1 || 1;
  }
  for (let char of string2) {
    charmap2[char] = charmap2[char] + 1 || 1;
  }

  const keys1 = Object.keys(charmap1);
  const keys2 = Object.keys(charmap2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (charmap1[key] !== charmap2[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagrams("rail safety", "fairy tales"));
console.log(anagrams("hello", "bye"));
