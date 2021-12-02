const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

display.textContent = 0;

let userValues = [];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => operate(e));
});

const storeNums = (e) => {
  if (e.target.className === "numbers") {
    let userNum = e.target.textContent;
    display.textContent = userNum;
    userValues.push(userNum);

    localStorage.userValues = JSON.stringify(userValues);
  }
};

const storeOperators = (e) => {
  if (e.target.className === "operators") {
    const userOperator = e.target.textContent;
    localStorage.setItem("operator", userOperator);
  }
};

const calculate = (num1, num2, storedOperator) => {
  switch (storedOperator) {
    case "+": {
      return num1 + num2;
    }
    case "-": {
      return num1 - num2;
    }
    case "*": {
      return num1 * num2;
    }
    case "/": {
      return num1 / num2;
    }
    default:
      console.log("error");
  }
};

const storeExtra = (e) => {};

const operate = (e) => {
  storeNums(e);

  storeOperators(e);

  storeExtra(e);

  if (e.target.id === "equals") {
    const storedValues = JSON.parse(localStorage.userValues);
    const storedOperator = localStorage.getItem("operator");

    const arrayLength = storedValues.length;
    const num1 = parseInt(storedValues[arrayLength - 2], 10);
    const num2 = parseInt(storedValues[arrayLength - 1], 10);

    const result = calculate(num1, num2, storedOperator);

    userValues.push(String(result));
    localStorage.userValues = JSON.stringify(userValues);
    display.textContent = result;
  }
};
