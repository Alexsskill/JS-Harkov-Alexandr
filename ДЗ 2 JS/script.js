let num1 = prompt("Введите первое число:");
num1 = parseFloat(num1);

let num2 = prompt("Введите второе число:");
num2 = parseFloat(num2);

let operation = prompt("Выберите операцию (+, -, *, /):");
let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 === 0) {
        alert("Ошибка: Деление на ноль невозможно.");
    } else {
        result = num1 / num2;
    }
} else {
    alert("Ошибка: Неверная операция. Выберите одну из следующих: +, -, *, /");
}

alert("Результат: " + result);
