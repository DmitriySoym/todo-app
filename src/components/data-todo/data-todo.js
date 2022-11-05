import "./data-todos.css";

export let todoArray = [];

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
