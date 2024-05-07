// after 1s first heading red
// after 3s second heading blue
// after 3s third heading green
// IN SEQUENCE

// const firstHeading = document.querySelector(".first");
// const secondHeading = document.querySelector(".second");
// const thirdHeading = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  addColor(1000, ".first", "red")
    .then(() => addColor(3000, ".second", "blue"))
    .then(() => addColor(3000, ".third", "green"))
    .catch((err) => {
      console.log(err);
    });
});

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
      }, time);
      resolve();
    } else {
      reject(`there is no such element ${selector}`);
    }
  });
}
// if I pass data in resolve('hello') I can get it in then((data)=>addColor(1000,'.first','red',data))
