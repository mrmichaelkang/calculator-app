// Functions
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(number1, number2, operator) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return;
  }
}

// Variables
let number1 = 4;
let operator = "+";
let number2 = 2;

console.log(operate(number1, number2, "+"));
console.log(operate(number1, number2, "-"));
console.log(operate(number1, number2, "*"));
console.log(operate(number1, number2, "/"));
