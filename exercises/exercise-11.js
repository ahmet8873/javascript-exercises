// write a function that accepts a positive number and returns a step shape
// with N levels using the # character
// example
// step(2)
// '#'
// '##'

// step(3)
// '#'
// '##'
// '###'

function step(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i));
  }
}
// step(5);

// another way

function step2(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output += "#";
    }
    console.log(output);
  }
}

// step2(5);

// write a function that accepts a positive number and returns a pyramid shape
// example
// pyramid(3)
// '  #  '
// ' ### '
// '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let output = " ".repeat(n - i);
    output += "#".repeat(2 * i - 1);
    console.log(output);
  }
}

pyramid(5);
