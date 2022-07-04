import { MAX_NUMBER_LENGTH, MAX_OPER_LENGTH } from "./constants.js";

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
        return alert(`숫자는 ${MAX_NUMBER_LENGTH}개가 최대에요`);

      calculatorValue.numberCount += 1;
      break;
    case "oper":
      if (calculatorValue.operCount >= MAX_OPER_LENGTH)
        return alert(`${MAX_OPER_LENGTH + 1}개의 숫자에 대해서만 가능해요`);

      calculatorValue.operCount += 1;
      calculatorValue.numberCount = 0;
      break;
    default:
      alert("정확한 값을 입력해주세요");
      break;
  }

  calculatorValue.value += value;
  renderNumber(calculatorValue.value);
};

const setResult = () => {
  const resultValue = eval(calculatorValue.value);
  renderNumber(resultValue);
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
