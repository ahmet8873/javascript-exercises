// count repeating letters in a string

function countRepeatingLetters(text) {
  let tempArr = text.split("");
  let tempObj = tempArr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;

    return acc;
  }, {});

  let str = "";
  for (let key in tempObj) {
    str += `${tempObj[key]}${key}`;
  }
  return str;
}

console.log(countRepeatingLetters("aabbccddffff")); // 2a2b2c2d4f
