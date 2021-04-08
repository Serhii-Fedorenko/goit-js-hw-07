const categoriesEl = document.querySelectorAll(".item");
const titlesEl = document.querySelectorAll(".item h2");

const printCategoriesQuantity = (categories) =>
  console.log(`В списке ${categories.length} категории.`);

const printCategoriesInfo = (titles) =>
  titles.forEach((title) =>
    console.log(
      `Категория: ${title.textContent}\nКоличество элементов: ${title.nextElementSibling.children.length}`
    )
  );

printCategoriesQuantity(categoriesEl);
printCategoriesInfo(titlesEl);