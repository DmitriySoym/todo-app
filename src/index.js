import { createApp } from "./components/app";
import { renderTodos } from "./components/data-todo";

const root = document.querySelector("#root");

root.append(createApp());

// const todoRow = document.querySelector(".itemsRow");
// console.log(todoRow);
renderTodos();
