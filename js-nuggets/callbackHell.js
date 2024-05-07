//multiple nested callback functions become difficult to manage and read due to excessive indentation and complexity. This occurs when handling multiple asynchronous operations sequentially, leading to code that is hard to understand, debug, and maintain.

// after 1s first heading red
// after 3s second heading blue
// after 3s third heading green
// IN SEQUENCE

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    firstHeading.style.color = "red";
    setTimeout(() => {
      secondHeading.style.color = "blue";
      setTimeout(() => {
        thirdHeading.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});

// async await will make our code more readable and maintainable
