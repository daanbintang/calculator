const calc = {
  displayNumber: "0",
  oprator: null,
  firstNumber: null,
  waitingForSecond: false,
};
function updateDisplay() {
  document.getElementById("displayNumber").innerText = calc.displayNumber;
}
function clear() {
  calc.displayNumber = "0";
  calc.oprator = null;
  calc.firstNumber = null;
  calc.waitingForSecond = false;
}
function input(digit) {
  if (calc.displayNumber === "0") {
    calc.displayNumber = digit;
  } else {
    calc.displayNumber += digit;
  }
}
const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
  button.addEventListener("click", function (event) {
    // objek yg di klik
    const target = event.target;
    input(target.innerText);
    updateDisplay();
  });
}
