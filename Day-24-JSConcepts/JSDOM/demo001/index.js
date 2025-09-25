const btn = document.querySelector("#btn");
const p = document.querySelector("#paragraph");

btn.addEventListener("click", function () {
  p.textContent = "Paragraph content is changed";
});
