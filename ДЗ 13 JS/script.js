const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const addButton = document.getElementById('addButton');
const container = document.getElementById('container');

addButton.addEventListener('click', () => {
    const block = document.createElement('div');
    block.classList.add('block');

    const colorClass = `color${random(1, 10)}`;
    block.classList.add(colorClass);

    block.addEventListener('click', () => {
        block.remove();
    });

    container.appendChild(block);
});

const colorPalette = document.querySelectorAll('.color-palette div');
const textElement = document.querySelector('.text');

colorPalette.forEach(color => {
    color.addEventListener('click', function () {
        const selectedColor = this.getAttribute('data-color');
        textElement.style.color = selectedColor;
    });
});