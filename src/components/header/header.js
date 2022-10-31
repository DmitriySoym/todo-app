import "./header.css";
import { createInput, createButton } from "../../cummon-functions";

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

  return header;
};
