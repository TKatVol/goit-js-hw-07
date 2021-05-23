const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('#ingredients');

const ingredient = ingredients.map( el => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = el;

  return ingredientEl;
});

ingredientsList.append(...ingredient);