import "./data-todos.css";

let todoArray = [];

export const loadFromLocalStorage = () => {
  const loadedData = JSON.parse(localStorage.getItem("todos"));
  if (loadedData != null) {
    todoArray = Array.from(loadedData);
  }

  return loadedData;
};

export const saveToLocflStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

export const deleteAllFromLocalStorage = () => {
  todoArray = [];
  saveToLocflStorage();
  renderTodos();
};

export const deleteLastFromLocalStorage = () => {
  todoArray.pop();
  saveToLocflStorage();
  renderTodos();
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

function deleteCurrentItem(e) {
  if (e.target.className != "deletCurrentTodo") return;
  const deleteItem = e.target.closest("li");

  todoArray.splice(deleteItem.className, 1);
  saveToLocflStorage();
  renderTodos();

  deleteItem.remove();
}

const doneItem = (e) => {
  const valueLabel = document
    .querySelector(".itemsRow")
    .querySelector("[for=" + e.target.getAttribute("id") + "]").innerHTML;
  console.log(valueLabel);

  todoArray.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("todos", JSON.stringify(todoArray));
    }
  });
};
