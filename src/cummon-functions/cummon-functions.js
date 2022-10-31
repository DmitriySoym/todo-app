import "./cummon-functions.css";

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

// export const addTodoItem = (valueOfMessage) => {
//   const newTodo = {
//     todo: valueOfMessage,
//     checked: false,
//     date: `${new Date().getDate()}/${
//       new Date().getMonth() + 1
//     }/${new Date().getFullYear()}`,
//   };
//   todoArray.push(newTodo);

//   renderTodos();
// };

// export const renderTodos = () => {
//   let displayMessage = "";
//   todoArray.forEach(function (item, index) {
//     displayMessage += `
// 	  <li>
// 	  <input type='checkbox'  id='item_${index}' ${item.checked ? "checked" : ""} >
// 	  <label for='item_${index}'>${item.todo}</label>
// 	  <span class="begintodo">Starting a task: <b>${item.date}</b></span>
// 	  <button class = "deletCurrentTodo">X</button>
// 	  </li>
// 	  `;
//   });

//   console.log(displayMessage);

//   return displayMessage.innerHTML;

//   //   todoRow.innerHTML = displayMessage;
// };
