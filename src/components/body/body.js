import "./body.css";

export function createAppBody() {
  const itemsList = document.createElement("ul");
  itemsList.classList.add("itemsRow");

  return itemsList;
}
