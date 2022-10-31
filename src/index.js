import { createApp } from "./components/app";
import { renderTodos } from "./components/data-todo";

const root = document.querySelector("#root");

root.append(createApp());

renderTodos();
