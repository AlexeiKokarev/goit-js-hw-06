function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    bgColor: document.querySelector('.color'),
    btnChangeColor: document.querySelector('.change-color'),
};

refs.btnChangeColor.addEventListener('click', function() {
    document.body.style.background = getRandomHexColor();
    refs.bgColor.textContent = document.body.style.background;
});