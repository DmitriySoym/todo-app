import "./cummon-functions.css";

export function createButton(buttonText, className) {
  const button = document.createElement("button");
  button.innerText = buttonText;
  button.classList.add(className);
  button.classList.add("btnStyle");
  return button;
}

export function createInput(inputPlaceholder, inputtype) {
  const input = document.createElement("input");
  input.placeholder = inputPlaceholder;
  input.type = inputtype;
  input.classList.add("inputStyle");
  return input;
}
