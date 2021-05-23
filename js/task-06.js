const input = document.querySelector('#validation-input');
const inputDataLength = input.getAttribute('data-length');

input.addEventListener('blur', inputValue => {
   
    const symbols = inputValue.currentTarget.value.length;
    
    if (symbols == inputDataLength) {
        input.classList.remove('invalid'); 
        input.classList.add('valid');
     } else {
        input.classList.remove('valid');
        input.classList.add('invalid');        
    }
});
    
