const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

display.textContent = 0;
let store = {
  initial: "",
  prevNum: "",
  currentNum: "",
  result: 0,
  operator: "",
  storeNum: false,
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => operate(e));
});

const storeNums = (e) => {
  if (store.storeNum) {
    store.currentNum += e.target.textContent;
    console.log("currentNum is ", store.currentNum);
    display.textContent = store.currentNum;
    console.log("storeNum inside currentNum:", store.storeNum);
  } else {
    store.prevNum += e.target.textContent;
    console.log("prevNum is ", store.prevNum);
    display.textContent = store.prevNum;
    console.log("storeNum inside prevNum:", store.storeNum);
  }
};

//Only when an operator is clicked, the number entered by the user is finally stored in the local storage
const storeOperators = (e) => {
  store.storeNum = !store.storeNum;
  console.log("storeNum inside storeOperators:", store.storeNum);
  store.operator = e.target.textContent;
  console.log(store.operator);
};

const storeExtra = (e) => {};

const calculate = () => {
  const prevNumToNum = parseInt(store.prevNum, 10);
  const currentNumToNum = parseInt(store.currentNum, 10);
  switch (store.operator) {
    case "+": {
      return currentNumToNum + prevNumToNum;
    }
    case "-": {
      return currentNumToNum - prevNumToNum;
    }
    case "*": {
      return currentNumToNum * prevNumToNum;
    }
    case "/": {
      return currentNumToNum / prevNumToNum;
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
  }
};
