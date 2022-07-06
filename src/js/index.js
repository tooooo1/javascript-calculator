import {
  MAX_NUMBER_LENGTH,
  MAX_OPERATOR_LENGTH,
  ERROR_MASSAGES,
} from "./constants.js";

const calcValue = document.querySelector("#total");
const calcDigit = document.querySelector(".calculator");
const calculatorValue = {
  value: "",
  operatorCount: 0,
  numberCount: 0,
};

const renderNumber = (number) => {
  calcValue.textContent = number;
};

const reset = () => {
  calculatorValue.value = "";
  calculatorValue.operatorCount = 0;
  calculatorValue.numberCount = 0;
  renderNumber(0);
};

const setNumber = (value, type) => {
  switch (type) {
    case "number":
      if (calculatorValue.numberCount >= MAX_NUMBER_LENGTH)
        return alert(ERROR_MASSAGES.INVALID_LENGTH);

      calculatorValue.numberCount += 1;
      break;
    case "operator":
      if (calculatorValue.operatorCount >= MAX_OPERATOR_LENGTH)
        return alert(ERROR_MASSAGES.INVALID_OPERATOR_LENGTH);
      if (calculatorValue.numberCount === 0)
        return alert(ERROR_MASSAGES.REQUIRED_DIGIT);

      calculatorValue.operatorCount += 1;
      calculatorValue.numberCount = 0;
      break;

    default:
      break;
  }

  if (value === "X") calculatorValue.value += "*";
  else calculatorValue.value += value;
  renderNumber(calculatorValue.value);
};

const setResult = () => {
  const resultValue = eval(calculatorValue.value);

  if (calculatorValue.value === "") return renderNumber(0);
  renderNumber(Math.floor(resultValue));
};

const handleClickBtn = (e) => {
  const clickValue = e.target.innerText;

  if (clickValue === "AC") return reset();
  if (clickValue === "=") return setResult();

  if (/[0-9]/.test(clickValue)) return setNumber(clickValue, "number");
  setNumber(clickValue, "operator");
};

const init = () => {
  calcDigit.addEventListener("click", handleClickBtn);
  renderNumber(0);
};

init();
