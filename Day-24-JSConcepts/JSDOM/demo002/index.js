const img1 = document.querySelector("#one");

const img2 = document.querySelector("#two");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let src1 = img1.src;
  let src2 = img2.src;

  img1.src = src2;
  img2.src = src1;
});
