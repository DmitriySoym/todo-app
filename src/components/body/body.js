import "./body.css";

export function createAppBody() {
  const itemsList = document.createElement("ul");
  itemsList.classList.add("itemsRow");

  return itemsList;
}

// export let todoArray = [];

// if (localStorage.getItem("todo")) {
//   todoArray = JSON.parse(localStorage.getItem("todo"));
//   displayMessages();
// }
