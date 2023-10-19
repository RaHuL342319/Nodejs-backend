var teacher = "sanket";

function fun() {
  var teacher = "Pulkit";
  // console.log(teacher, teachingAssisatnt);  // error because teachingAssistant is not declare till this time.
  teachingAssisatnt = "vaibhav"; // autoglobals
}

function gun() {
  console.log(subject); // undefined because its already declared during parsing phase but ther is no value.
  var subject = "JS";
  console.log(teacher);
}

console.log(teacher);
fun();
gun();
