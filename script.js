const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

display.textContent = 0;
let store = {
  prevNum: "",
  currentNum: "",
  result: "",
  operator: "",
  storeNum: false,
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => operate(e));
});

const storeNums = (e) => {
  if (!store.storeNum) {
    store.prevNum += e.target.textContent;
    localStorage.setItem("prevNum", JSON.stringify(store.prevNum));
    console.log(store.prevNum);
  } else {
    store.currentNum += e.target.textContent;
    localStorage.setItem("currentNum", JSON.stringify(store.currentNum));
    console.log(currentNum);
  }
};

//Only when an operator is clicked, the number entered by the user is finally stored in the local storage
const storeOperators = (e) => {
  store.storeNum = true;
  store.operator = e.target.textContent;
  localStorage.setItem("operator", JSON.stringify(store.operator));
};

const storeExtra = (e) => {};

const calculate = () => {
  switch (store.operator) {
    case "+": {
      return store.currentNum + store.prevNum;
    }
    case "-": {
      return store.currentNum - store.prevNum;
    }
    case "*": {
      return store.currentNum * store.prevNum;
    }
    case "/": {
      return store.currentNum / store.prevNum;
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
    display.textContent = calculate();
  }
};
