import "./data-todos.css";

let todoArray = [];

export const loadFromLocalStorage = () => {
  const loadedData = JSON.parse(localStorage.getItem("todos"));

  if (loadedData != null) {
    todoArray = Array.from(loadedData);
  }

  return loadedData;
};

const saveToLocflStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

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
		<li>
		<input type='checkbox'  id='item_${index}' ${item.checked ? "checked" : ""} >
		<label for='item_${index}'>${item.todo}</label>
		<span class="begintodo">Starting a task: <b class='dateTodo'>${
      item.date
    }</b></span>
		<button class = "deletCurrentTodo">X</button>
		</li>
		`;
  });

  const todoRow = document.querySelector(".itemsRow");
  todoRow.innerHTML = displayMessage;

  return displayMessage;
};
