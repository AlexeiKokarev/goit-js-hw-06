let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const onValue = document.querySelector('#value');
const clickBtnDecrement = () => {
    counterValue -= 1;
    onValue.textContent = counterValue;
};

const clickBtnIncrement = () => {
    counterValue += 1;
    onValue.textContent = counterValue;
};

btnDecrement.addEventListener('click', clickBtnDecrement);
btnIncrement.addEventListener('click', clickBtnIncrement);