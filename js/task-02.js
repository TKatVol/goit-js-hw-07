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





//  ingredients.forEach(ing => {
//    const ingredient = document.createElement('li');
//    ingredient.textContent = ing;
//    ingredientsList.appendChild(ingredient);
//  })



// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement('li');
//   ingredient.textContent = ingredients[i];
//   ingredientsList.appendChild(ingredient);
// }


