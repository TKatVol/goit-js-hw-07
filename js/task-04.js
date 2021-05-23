const counterValue = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


decrement.addEventListener('click', decr => {
    counterValue.textContent -= 1;
});

increment.addEventListener('click', incr => {
   counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
