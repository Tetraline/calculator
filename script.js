function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  // Operators are +, -, *, /
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

let buttonMatrix = [
  ["7", "8", "9", "DEL", "AC"],
  ["4", "5", "6", "*", "/"],
  ["1", "2", "3", "+", "-"],
  ["0", ".", "", "", "="],
];
let memory = [0, 0, 0];

// Takes a string (eg: "1" or "+") and takes appropriate action
function buttonPress(press) {
  screen = document.getElementById("screen");
  console.log(press);
  switch (press) {
    case "AC":
      console.log("clearning screen");
      screen.innerText = "";
      break;
    case "DEL":
      screen.innerText = screen.innerText.slice(0, -1);
      break;
    case "+":
      memory[0] = screen.innerText;
      memory[1] = "+";
      screen.innerText = "";
      break;
    case "-":
      memory[0] = screen.innerText;
      memory[1] = "-";
      screen.innerText = "";
      break;
    case "*":
      memory[0] = screen.innerText;
      memory[1] = "*";
      screen.innerText = "";
      break;
    case "/":
      memory[0] = screen.innerText;
      memory[1] = "/";
      screen.innerText = "";
      break;
    case "=":
      console.log("Operating" + memory[0] + memory[1] + screen.innerText);
      screen.innerText = operate(memory[0], memory[1], screen.innerText);

      break;
    default:
      console.log("default option");
      screen.innerText += press;
  }
}

function buildButtons() {
  buttonsDiv = document.getElementById("buttons");
  for (row of buttonMatrix) {
    for (buttonText of row) {
      let button = document.createElement("button");
      button.innerText = buttonText;
      button.classList.add("button");
      button.onclick = function (e) {
        buttonPress(e.originalTarget.firstChild.data);
      };
      //e.explicitOriginalTarget.classList.add("selected");
      buttonsDiv.appendChild(button);
    }
  }
}

buildButtons();
