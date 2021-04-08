const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const listItemIngredients = ingredients.map(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;

    return listItem;
})

listEl.append(...listItemIngredients);