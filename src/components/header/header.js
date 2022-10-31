import "./header.css";
import { createInput, createButton } from "../../cummon-functions";
import {
  addTodoItem,
  deleteAllFromLocalStorage,
  deleteLastFromLocalStorage,
} from "../data-todo";

export const createHerader = () => {
  const header = document.createElement("div");
  header.classList.add("todoHeader");

  const buttonAdd = createButton("Add Item", "btnstyleAdd");
  const todoInput = createInput("Enter todo", "text");
  const buttonDeleteLast = createButton("Delete Last", "btnstyleLast");
  const buttonDeleteAll = createButton("Delete All", "btnstyleAll");

  header.append(todoInput);
  header.append(buttonAdd);
  header.append(buttonDeleteLast);
  header.append(buttonDeleteAll);

  buttonAdd.addEventListener("click", function () {
    if (todoInput.value === "") {
      return;
    }
    addTodoItem(todoInput.value);
  });

  buttonDeleteAll.addEventListener("click", function () {
    deleteAllFromLocalStorage();
  });

  buttonDeleteLast.addEventListener("click", function () {
    //  deleteLastNote();
    deleteLastFromLocalStorage();
  });

  return header;
};
