import { MAX_NUMBER_LENGTH, ERROR_MASSAGES, OPERATORS } from "./constants.js";

const calcValue = document.querySelector("#total");
const calcDigit = document.querySelector(".calculator");
const calculatorValue = {
  number: "",
  lastNumber: "",
  operator: "",
};

const renderNumber = (number) => {
  const content = number === "" ? 0 : number;
  calcValue.textContent = content;
};

const reset = () => {
  calculatorValue.number = "";
  calculatorValue.lastNumber = "";
  calculatorValue.operator = "";
  renderNumber(0);
};

const calculator = () => {
  switch (calculatorValue.operator) {
    case OPERATORS.PLUS:
      return (
        Number(calculatorValue.number) + Number(calculatorValue.lastNumber)
      );
    case OPERATORS.MINUS:
      return (
        Number(calculatorValue.number) - Number(calculatorValue.lastNumber)
      );
    case OPERATORS.MULTIPLICATION:
      return (
        Number(calculatorValue.number) * Number(calculatorValue.lastNumber)
      );
    case OPERATORS.DIVISION:
      return Math.floor(calculatorValue.number / calculatorValue.lastNumber);
    default:
      throw new Error(ERROR_MASSAGES.NOT_RIGHT_VALUE);
  }
};

const isOperator = () => calculatorValue.operator === "";

const setNumber = (value) =>
  isOperator()
    ? (calculatorValue.number += value)
    : (calculatorValue.lastNumber += value);

const checkMaxOperator = (value) => {
  if (calculatorValue.number === "")
    return alert(ERROR_MASSAGES.REQUIRED_DIGIT);
  if ((calculatorValue.lastNumber !== "") & (value !== OPERATORS.EQUAL))
    return alert(ERROR_MASSAGES.INVALID_OPERATOR_LENGTH);

  setOperator(value);
};

const checkMaxNumber = (value) => {
  if (isOperator()) {
    if (MAX_NUMBER_LENGTH <= calculatorValue.number.length)
      return alert(ERROR_MASSAGES.INVALID_LENGTH);
  } else {
    if (MAX_NUMBER_LENGTH <= calculatorValue.lastNumber.length)
      return alert(ERROR_MASSAGES.INVALID_LENGTH);
  }

  setNumber(value);
};

const setOperator = (value) => {
  if (value === OPERATORS.EQUAL) {
    calculatorValue.number = calculator();
    calculatorValue.operator = "";
    calculatorValue.lastNumber = "";
  } else {
    calculatorValue.operator = value;
  }
};

const handler = (e) => {
  const clickValue = e.target.innerText;
  const isNumber = /[0-9]/.test(clickValue);

  if (clickValue === OPERATORS.AC) return reset();

  isNumber ? checkMaxNumber(clickValue) : checkMaxOperator(clickValue);

  renderNumber(
    calculatorValue.number +
      calculatorValue.operator +
      calculatorValue.lastNumber
  );
};

const init = () => {
  calcDigit.addEventListener("click", handler);
  renderNumber(0);
};

init();
