function fun() {
  ta = "vaibhav";
  console.log(ta);
}

function gun() {
  "use strict"; // so it will do auto global.
  // if you will put "use strict on top then it will apply on all the file."
  td = "raj";
  console.log(td);
}

fun();
gun();
