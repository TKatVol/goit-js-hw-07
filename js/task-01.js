const categoriesName = document.querySelectorAll('.item');

console.log(`В списке ${categoriesName.length} категории.`);

categoriesName.forEach( el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});
