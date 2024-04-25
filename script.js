const button = document.querySelector("button");
const output = document.querySelector(".output");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  let cash = input.value;
  let tips = (cash * 0.15).toFixed(2);
  output.innerHTML = `for $${cash} you have to pay $${tips} as tips`;
});
