const start = document.querySelector("#start");

const stop = document.querySelector("#stop");
var id;
start.addEventListener("click", () => {
  count = 0;
  id = setInterval(() => {
    document.querySelector("h3").textContent = ++count;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(id);
});
