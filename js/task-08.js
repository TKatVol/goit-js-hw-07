const numberBoxes = document.querySelector('#controls input');
const createBnt = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

createBnt.addEventListener('click', createNewBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createNewBoxes() {
    const amount = numberBoxes.value;
    createBoxes(amount);
};

function createBoxes(amount) {
    const elements = [];
  
    for (let i = 0; i < amount; i += 1) {
        const minWidth = 30;
        const minHeigth = 30;

        const box = document.createElement('div');
        box.style.backgroundColor = '#' + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        box.style.width = minWidth + 10 * [i] +'px';
        box.style.height = minHeigth + 10 * [i] + 'px';
        elements.push(box) ;
    }
  
   boxes.append(...elements); 
};

function destroyBoxes() {
    numberBoxes.value = 0;
    boxes.innerHTML = '';
};
