const fontSizeControl = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

fontSizeControl.addEventListener('input', stepUpDown => {
    textFontSize.style.fontSize = fontSizeControl.value + "px";
})


