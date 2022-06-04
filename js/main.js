let operation;
let number1 = "";
let number2 = "";
let buttonCalculate = $(".calculate");
const screen = $(".calc-screen");

const listenersOfButtonsNumbers = () => {
  let buttonsNumbers = $(".btn.number");
  buttonsNumbers.each((index, button) => {
    button.addEventListener("click", () => {
      if (!operation) {
        number1 = number1 + button.textContent;
        refreshScreen(number1);
      } else {
        number2 = number2 + button.textContent;
        refreshScreen(number2);
      }
    });
  });
};

const listenersOfOperations = () => {
  let operations = $(".btn.operation");
  console.log(operations);
  operations.each((index, element) => {
    element.addEventListener("click", () => {
      if (number1 && number2) {
        calculate();
      }
      operation = element.textContent;
      console.log(operation);
      refreshScreen(operation);
    });
  });
};

const refreshScreen = (value) => {
  screen.text(value);
};

listenersOfOperations();
listenersOfButtonsNumbers();

buttonCalculate.click(() => {
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  if (operation == "x") {
    operation = "*";
  }
  let result = eval(`${number1} ${operation} ${number2}`);
  refreshScreen(result);
  result = parseFloat(result);
  number1 = result;
  number2 = "";
  operation = null;
});

$(".clear").click(() => {
  number1 = "";
  number2 = "";
  operation = "";
  refreshScreen("");
});

$(".float").click(() => {
  if (operation) {
    number2 = number2 + ".";
    refreshScreen(number2);
    return;
  }
  number1 = number1 + ".";
  refreshScreen(number1);
});
