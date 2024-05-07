//Promises allow you to attach callbacks toasynchronous tasks, simplifying error handling and avoiding callback hell.

// main purpose is to avoid callback hell

//pending , rejected, fulfilled

const promise = new Promise((resolve, reject) => {
  //   resolve("succesfully resolved");
  reject("failed");
});
// console.log(promise.value); //undefined
// promise.then((data) => console.log(data)); //succesfully resolved

promise.then((data) => console.log(data)).catch((err) => console.log(err));
