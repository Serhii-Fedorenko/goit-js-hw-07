const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

// const listItemIngredients = ingredients.map(ingredient => {
//     const listItem = document.createElement("li");
//     listItem.textContent = ingredient;

//     return listItem;
// })

const makeListItemIngredients = options => {
  return options.map(ingredient => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;

    return listItem;
  });
};

const elements = makeListItemIngredients(ingredients);

listEl.append(...elements);
