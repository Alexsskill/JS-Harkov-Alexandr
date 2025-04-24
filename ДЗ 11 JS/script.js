const body = document.body;

function handleMouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const warningAreaSize = 100;

    if (mouseY < warningAreaSize || mouseX > window.innerWidth - warningAreaSize) {
        alert("Не покидайте страницу так рано!");
        body.removeEventListener("mousemove", handleMouseMove);
    }
}
body.addEventListener("mousemove", handleMouseMove);

////////////////////////////////////////////////////////

function calculate() {
    const inputValue = document.getElementById('inputValue').value;

    const numbers = inputValue.split(' ');
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Пожалуйста, введите два числа через пробел.');
        return;
    }

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    let quotient = 'Ошибка';
    if (num2 !== 0) {
        quotient = num1 / num2;
    }

    document.getElementById('sum').textContent = sum;
    document.getElementById('difference').textContent = difference;
    document.getElementById('product').textContent = product;
    document.getElementById('quotient').textContent = quotient;
}

function clearFields() {
    document.getElementById('inputValue').value = '';
    document.getElementById('sum').textContent = '0';
    document.getElementById('difference').textContent = '0';
    document.getElementById('product').textContent = '0';
    document.getElementById('quotient').textContent = '0';
}