const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onName = event => {
    nameOutput.textContent = event.currentTarget.value.trim() || 'Anonimous';
};
nameInput.addEventListener('input', onName);