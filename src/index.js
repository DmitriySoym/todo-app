import { createApp } from "./components/app";

import { renderTodos } from "./cummon-functions";

const root = document.querySelector("#root");

root.append(createApp());

renderTodos();
