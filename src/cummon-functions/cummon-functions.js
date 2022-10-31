import "./cummon-functions.css";
import { todoArray } from "../components/data-todo";

export const createButton = (buttonText, className) => {
  const button = document.createElement("button");
  button.innerText = buttonText;
  button.classList.add(className);
  button.classList.add("btnStyle");
  return button;
};

export const createInput = (inputPlaceholder, inputtype) => {
  const input = document.createElement("input");
  input.placeholder = inputPlaceholder;
  input.type = inputtype;
  input.classList.add("inputStyle");
  return input;
};
