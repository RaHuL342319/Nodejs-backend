const form = document.querySelector("form");
const username = document.querySelector("#username");
const pass = document.querySelector("#password");
const h4 = document.querySelector("h4");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  // console.log(username.value, pass.value);
  if (username.value === "" || pass.value === "") {
    // console.log("blank");
    h4.textContent = "error, Some fields are blank..";
    h4.style.color = "red";
  } else {
    h4.textContent = "";
    h4.style.color = "black";
  }
});
