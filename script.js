let buttonMatrix = [
  ["7", "8", "9", "DEL", "AC"],
  ["4", "5", "6", "*", "/"],
  ["1", "2", "3", "+", "-"],
  ["0", ".", "", "", "="],
];
let memory = [0, 0, 0];

window.addEventListener("keydown", function (e) {
  if (buttonMatrix.some((row) => row.includes(e.key))) {
    buttonToPress = document.getElementById(e.key);
    buttonToPress.click();
  }
  if (e.key == "Enter") {
    buttonToPress = document.getElementById("=");
    buttonToPress.click();
  }
});

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

// Takes a string (eg: "1" or "+") and takes appropriate action
function buttonPress(press) {
  screen = document.getElementById("screen");
  equals = document.getElementById("=");
  switch (press) {
    case "AC":
      screen.innerText = "";
      memory = [0, 0, 0];
      break;
    case "DEL":
      screen.innerText = screen.innerText.slice(0, -1);
      break;
    case "+":
      if (memory[1] != 0) {
        buttonPress("=");
      }
      memory[0] = screen.innerText;
      memory[1] = "+";
      screen.innerText = "";
      break;
    case "-":
      if (memory[1] != 0) {
        buttonPress("=");
      }
      memory[0] = screen.innerText;
      memory[1] = "-";
      screen.innerText = "";
      break;
    case "*":
      if (memory[1] != 0) {
        buttonPress("=");
      }
      memory[0] = screen.innerText;
      memory[1] = "*";
      screen.innerText = "";
      break;
    case "/":
      if (memory[1] != 0) {
        buttonPress("=");
      }
      memory[0] = screen.innerText;
      memory[1] = "/";
      screen.innerText = "";
      break;
    case "=":
      console.log("Operating" + memory[0] + memory[1] + screen.innerText);
      let result = operate(memory[0], memory[1], screen.innerText);
      screen.innerText = result;
      memory[0] = result;
      memory[1] = 0;
      memory[2] = 0;
      break;
    default:
      screen.innerText += press;
  }
}

function buildButtons() {
  buttonsDiv = document.getElementById("buttons");
  for (row of buttonMatrix) {
    for (buttonText of row) {
      // It's better to use a instead of button elements because button elements can experience unwanted presses when the enter key is used.
      let button = document.createElement("a");
      button.innerText = buttonText;
      button.classList.add("button");
      button.setAttribute("id", buttonText);
      button.ontouchstart = function (e) {
        e.preventDefault();
        buttonPress(e.targetTouches[0].target.id);
      };
      button.onclick = function (e) {
        buttonPress(e.originalTarget.firstChild.data);
      };
      //e.explicitOriginalTarget.classList.add("selected");
      buttonsDiv.appendChild(button);
    }
  }
}

buildButtons();
