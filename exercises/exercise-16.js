// return first word with gratest number of repeated letters
function longestRepeatedWord(str) {
  let tempArr = str.split(" ");
  tempArr = tempArr.map((item) => {
    let tempItem = item.toLowerCase().split("");
    return tempItem.reduce(
      (acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        if (acc[curr] > acc.max) {
          acc.max = acc[curr];
        }
        return acc;
      },
      { max: 1, word: item }
    );
  });

  let max = 0;
  let maxword = "";
  for (let item of tempArr) {
    if (item.max > max) {
      max = item.max;
      maxword = item.word;
    }
  }
  return maxword;
}

console.log(
  longestRepeatedWord(
    "javascript is the best programming languageeee in the world"
  )
);
