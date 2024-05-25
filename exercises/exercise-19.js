// count repeating letters in a string

const countLetters = (text) => {
  let tempArr = text.split("");
  let count = 1;
  let letters = [];
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === tempArr[i + 1]) {
      count++;
    } else {
      let value = `${count}${tempArr[i]}`;
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.join("");
};

console.log(countLetters("aabbccdffff")); // 2a2b2c2d4f
