const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', nameValue => {
    const textName = nameValue.currentTarget.value;
   // nameOutput.textContent = textName;

    if (textName.trim() !== '') {
        nameOutput.textContent = textName;
    } else {
        nameOutput.textContent = 'незнакомец';
    }
});