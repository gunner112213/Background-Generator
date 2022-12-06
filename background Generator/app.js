let time = document.getElementById("c1");
let life = document.getElementById("c2");
let body = document.getElementById("body");

time.addEventListener("input", () => {
  body.style.background =
    "linear-gradient(to right," + time.value + ", " + life.value + " )";
});
life.addEventListener("input", () => {
  body.style.background =
    "linear-gradient(to right, " + time.value + ", " + life.value + ")";
});
