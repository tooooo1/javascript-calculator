import { PLUS, MINUS, MULTIPLICATION, DIVISION } from "./constant";
const calcValue = document.querySelector("#total");
const calcDigit = document.querySelectorAll(".digits");
const calculatorValue = {
  value: 0,
  count: 0,
};

const renderNumber = (number) => {
  calcValue.textContent = number;
};

const calculator = () => {
  calcDigit.forEach((button) => {
    button.addEventListener("click");
  });
};

const calculatorReducer = (operator, state) => {
  switch (operator) {
    case PLUS: {
      calculatorValue.value += state;
      count += 1;
      break;
    }
    case MINUS: {
      calculatorValue.value += state;
      count += 1;
      break;
    }
    case MULTIPLICATION: {
      calculatorValue.value += state;
      count += 1;
      break;
    }
    case DIVISION: {
      calculatorValue.value += state;
      count += 1;
      break;
    }
  }
};

export default calculator;
