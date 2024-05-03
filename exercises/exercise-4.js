// given a string , return true if it is a palindrome

function isPalindrome(text) {
  let reversed = text.split("").reverse().join("");
  //   if (text === reversed) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return text === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
