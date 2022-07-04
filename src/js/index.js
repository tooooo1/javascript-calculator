import {
  MAX_NUMBER_LENGTH,
  MAX_OPER_LENGTH,
  INVALID_LENGTH,
  INVALID_OPER_LENGTH,
  REQUIRED_DIGIT,
} from "./constants.js";

const calcValue = document.querySelector("#total");
const calcDigit = document.querySelectorAll(".calculator");
const calculatorValue = {
  value: "",
  operCount: 0,
  numberCount: 0,
};

const renderNumber = (number) => {
  calcValue.textContent = number;
};

const reset = () => {
  calculatorValue.value = "";
  calculatorValue.operCount = 0;
  calculatorValue.numberCount = 0;
  renderNumber(0);
};

const setNumber = (value, type) => {
  switch (type) {
    case "number":
      if (calculatorValue.numberCount >= MAX_NUMBER_LENGTH)
        return alert(INVALID_LENGTH);

      calculatorValue.numberCount += 1;
      break;
    case "oper":
      if (calculatorValue.operCount >= MAX_OPER_LENGTH)
        return alert(INVALID_OPER_LENGTH);
      if (calculatorValue.numberCount === 0) return alert(REQUIRED_DIGIT);

      calculatorValue.operCount += 1;
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
  setNumber(clickValue, "oper");
};

const init = () => {
  calcDigit.forEach((button) => {
    button.addEventListener("click", handleClickBtn);
  });
  renderNumber(0);
};

init();
