function demo3(val) {
  return new Promise(function (resolve, reject) {
    console.log("Start");
    setTimeout(function process() {
      console.log("Completed timer");
      if (val % 2 == 0) {
        resolve("Even");
      } else {
        reject("Odd");
      }
    }, 3000);
    console.log("Somewhere");
  });
}

demo3(4);
