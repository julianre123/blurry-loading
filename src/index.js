import "./styles.css";

const percentage = document.querySelector(".percentage");
const background = document.querySelector(".background");
const div = document.querySelector("div");
var number = 0;
var int = setInterval(blurr, 30);
function blurr() {
  number++;
  if (number > 99) {
    clearInterval(int);
  }
  div.innerHTML = number + "%";

  percentage.style.opacity = scale(number, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(number, 0, 100, 20, 0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
