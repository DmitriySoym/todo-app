import "./cummon-functions.css";
import {
  todoArray,
  loadFromLocalStorage,
  saveToLocflStorage,
} from "../components/data-todo";

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

loadFromLocalStorage();

export const doneItem = (e) => {
  const valueLabel = document
    .querySelector(".itemsRow")
    .querySelector("[for=" + e.target.getAttribute("id") + "]").innerHTML;

  todoArray.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todos", JSON.stringify(todoArray));
    }
  });
};

export const deleteLastFromLocalStorage = () => {
  todoArray.pop();
  saveToLocflStorage();
  renderTodos();
};

export const deleteAllFromLocalStorage = () => {
  todoArray.length = 0;
  saveToLocflStorage();
  renderTodos();
};

function deleteCurrentItem(e) {
  if (e.target.className != "deletCurrentTodo") return;
  const deleteItem = e.target.closest("li");

  todoArray.splice(deleteItem.className, 1);
  saveToLocflStorage();
  renderTodos();

  deleteItem.remove();
}

export const addTodoItem = (valueOfMessage) => {
  const newTodo = {
    todo: valueOfMessage,
    checked: false,
    date: `${new Date().getDate()}/${
      new Date().getMonth() + 1
    }/${new Date().getFullYear()}`,
  };
  todoArray.push(newTodo);
  saveToLocflStorage();
  renderTodos();
};

export const renderTodos = () => {
  loadFromLocalStorage();
  let displayMessage = "";

  todoArray.forEach(function (item, index) {
    displayMessage += `
		<li class='${index}'>
		<input type='checkbox'  id='item_${index}' ${item.checked ? "checked" : ""} >
		<label for='item_${index}'>${item.todo}</label>
		<span class="begintodo">start task: <b class='dateTodo'>${item.date}</b></span>
		<button class = "deletCurrentTodo">X</button>
		</li>
		`;
  });

  const todoRow = document.querySelector(".itemsRow");
  todoRow.innerHTML = displayMessage;
  todoRow.addEventListener("change", doneItem);
  todoRow.addEventListener("click", deleteCurrentItem);

  return displayMessage;
};
