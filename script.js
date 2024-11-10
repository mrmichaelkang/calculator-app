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
    case "x":
      return multiply(number1, number2);
    case "÷":
      return divide(number1, number2);
    default:
      return;
  }
}

function toggle() {
  if (
    lightMode.classList.contains("not-selected-toggle") &&
    darkMode.classList.contains("selected-toggle")
  ) {
    lightMode.classList.toggle("selected-toggle");
    lightMode.classList.toggle("not-selected-toggle");
    darkMode.classList.toggle("selected-toggle");
    darkMode.classList.toggle("not-selected-toggle");
  } else if (
    darkMode.classList.contains("not-selected-toggle") &&
    lightMode.classList.contains("selected-toggle")
  ) {
    lightMode.classList.toggle("selected-toggle");
    lightMode.classList.toggle("not-selected-toggle");
    darkMode.classList.toggle("selected-toggle");
    darkMode.classList.toggle("not-selected-toggle");
  }
}

// DOM
const calcText = document.querySelector(".calc-text");
const calcButtons = document.querySelectorAll(".calc-btn");
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");
let num1 = 0;
let operator = "";
let num2 = "";

calcButtons.forEach((calcButton) => {
  calcButton.addEventListener("click", () => {
    if (calcButton.textContent === "AC") {
      calcText.innerHTML = "0";
    } else if (
      calcButton.textContent === "+/-" &&
      calcText.innerHTML.split().length === 1
    ) {
      calcText.innerHTML = +calcText.innerHTML * -1;
    } else if (
      calcText.innerHTML.split(" ").length === 3 &&
      calcButton.textContent === "="
    ) {
      [num1, operator, num2] = calcText.innerHTML.split(" ");
      calcText.innerHTML = operate(+num1, +num2, operator).toFixed(0);
    } else if (calcText.innerHTML === "0") {
      calcText.innerHTML = calcButton.textContent;
    } else if (calcButton.textContent !== ".") {
      if (
        calcButton.textContent === "+" ||
        calcButton.textContent === "-" ||
        calcButton.textContent === "x" ||
        calcButton.textContent === "÷" ||
        calcText.innerHTML.slice(-1) === "+" ||
        calcText.innerHTML.slice(-1) === "-" ||
        calcText.innerHTML.slice(-1) === "x" ||
        calcText.innerHTML.slice(-1) === "÷"
      ) {
        calcText.innerHTML += " " + calcButton.textContent;
      } else {
        calcText.innerHTML += calcButton.textContent;
      }
    } else if (calcButton.textContent === ".") {
      calcText.innerHTML += calcButton.textContent;
    }
  });
});

lightMode.addEventListener("click", toggle);
darkMode.addEventListener("click", toggle);

// Variables
// let number1 = 4;
// let operator = "+";
// let number2 = 2;

// console.log(operate(number1, number2, "+"));
// console.log(operate(number1, number2, "-"));
// console.log(operate(number1, number2, "*"));
// console.log(operate(number1, number2, "/"));
