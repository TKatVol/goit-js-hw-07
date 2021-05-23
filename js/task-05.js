const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', nameValue => {
    nameOutput.textContent = nameValue.currentTarget.value;

    if (nameValue.currentTarget.value === '') {
        nameOutput.textContent = 'незнакомец';
    }
});