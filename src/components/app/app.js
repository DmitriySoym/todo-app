import "./app.css";
import { createHerader } from "../header";
import { createAppBody } from "../body";

export const createApp = () => {
  const app = document.createElement("div");
  const appHeader = createHerader();
  const itemsRow = createAppBody();

  app.append(appHeader);
  app.append(itemsRow);

  return app;
};
