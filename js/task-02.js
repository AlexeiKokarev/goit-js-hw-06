const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const elementUlRef = document.querySelector('ul');
const markup = ingredients.map(elem => {
    const elemLi = document.createElement('li');
    elemLi.textContent = elem;
    elemLi.classList.add('item');
    return elemLi;
});
elementUlRef.append(...markup);