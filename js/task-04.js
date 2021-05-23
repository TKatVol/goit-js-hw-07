const counterValue = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


decrement.addEventListener('click', (event) => {
    counterValue.textContent -= 1;
});

increment.addEventListener('click', (event) => {
   counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
