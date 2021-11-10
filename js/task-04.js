let counterValue = 0;
const value = document.querySelector('#value');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
}

minusBtn.addEventListener('click', minusClick);

const plusClick = () => {
    counterValue += 1;
    value.textContent = counterValue;
}

plusBtn.addEventListener('click', plusClick);
