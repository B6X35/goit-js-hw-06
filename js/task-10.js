function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let amount = 0; 
const numIput = document.querySelector('input');
numIput.addEventListener('input', event => {
  amount = event.currentTarget.value;
});
console.log(amount);
const createBtn = document.querySelector('button[data-create]');
const divBoxes = document.querySelector('#boxes');
const destroyBtn = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    let number = 10 * i;
    divEl.style.height = number + 'px';
    divEl.style.width = number + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
  }
  divBoxes.append(divEl);
}

createBtn.addEventListener('click', () => {
  createBoxes();
})


function destroyBoxes() {
  return divBoxes;
}

createBtn.addEventListener('click', () => {
  destroyBoxes();
})