const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

display.textContent = 0;
let store = {
  temp: "",
  storeNum: false,
  prevNum: "",
  currentNum: "",
  operator: null,
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => operate(e));
});

const storeNums = (e) => {
  const numClicked = e.target.textContent;

  if (store.storeNum) {
    console.log("storeNum");
  }
};

//Only when an operator is clicked, the number entered by the user is finally stored in the local storage
const storeOperators = (e) => {
  store.storeNum = true;
};

const storeExtra = (e) => {};

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

const operate = (e) => {
  if (e.target.className === "numbers") {
    storeNums(e);
  } else if (e.target.className === "operators") {
    storeOperators(e);
  } else if (e.target.className === "extra") {
    storeExtra(e);
  } else if (e.target.id === "period") {
    console.log("period");
  } else if (e.target.id === "equals") {
    console.log("equals");
  }
};
