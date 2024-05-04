// return true if the number is prime
// prime number is only divisible by 1 and itself

const prime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
