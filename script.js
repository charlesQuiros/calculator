const display = document.getElementById("display");
const ac = document.getElementById("ac");
const posMin = document.getElementById("pos-min");
const percentage = document.getElementById("percentage");
const division = document.getElementById("division");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiplication = document.getElementById("multiplication");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const addition = document.getElementById("addition");
const zero = document.getElementById("zero");
const period = document.getElementById("period");
const equals = document.getElementById("equals");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => operate(e));
});

const operate = (e) => {
  display.textContent = e.target.textContent;
  if (e.target.className === "numbers") {
    console.log("numbers");
  }

  if (e.target.className === "extra") {
    console.log("extra");
  }

  if (e.target.className === "operators") {
    console.log("operators");
  }
};
