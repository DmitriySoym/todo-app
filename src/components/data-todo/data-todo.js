let todoArray = [];

const saveToLocflStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoArray));
};

// if (localStorage.getItem("todo")) {
//   todoArray = JSON.parse(localStorage.getItem("todo"));
//   displayMessages();
// }

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
  let displayMessage = "";
  todoArray.forEach(function (item, index) {
    displayMessage += `
		<li>
		<input type='checkbox'  id='item_${index}' ${item.checked ? "checked" : ""} >
		<label for='item_${index}'>${item.todo}</label>
		<span class="begintodo">Starting a task: <b>${item.date}</b></span>
		<button class = "deletCurrentTodo">X</button>
		</li>
		`;
  });

  const todoRow = document.querySelector(".itemsRow");
  console.log(todoRow);
  todoRow.innerHTML = displayMessage;

  return displayMessage.innerHTML;
};
