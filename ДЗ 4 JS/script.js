let numbers = [];

while (numbers.length < 5) {
    let input = prompt("Введите число (или введите 0 или 'не число', чтобы завершить):");
    let number = Number(input);

    if (isNaN(number) || number === 0) {
        alert("Ввод завершен!");
        break;
    }

    numbers.push(number);
}

if (numbers.length === 0) {
    console.log("Массив пуст. Нет чисел для обработки.");
} else {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    let average = sum / numbers.length;

    alert("Максимальное значение: " + max);
    alert("Минимальное значение: " + min);
    alert("Сумма всех чисел: " + sum);
    alert("Среднее арифметическое: " + average);
}

////////////////////////////////////////////////////

let X = prompt("Введите значение X");

let array = [];
for (let i = 0; i < 5; i++) {
    let element = prompt(`Введите элемент массива №${i + 1}:`);
    array.push(element);
}

let index = array.indexOf(X);

if (index === -1) {
    console.log("Значение X не найдено в массиве.");
} else {

    let leftNeighborIndex = (index - 1 + array.length) % array.length;
    let rightNeighborIndex = (index + 1) % array.length;

    let leftNeighbor = array[leftNeighborIndex];
    let rightNeighbor = array[rightNeighborIndex];

    alert(`Индекс X: ${index}`);
    alert(`Левый соседний элемент: ${leftNeighbor}`);
    alert(`Правый соседний элемент: ${rightNeighbor}`);
}

////////////////////////////////////////////////////

let evenArray = [];
let oddArray = [];

for (let i = 0; i < 10; i++) {
    let userInput = prompt(`Введите строку №${i + 1}:`);

    if (userInput.length % 2 === 0) {
        evenArray.push(userInput);
    } else {
        oddArray.push(userInput);
    }
}

alert("Строки с четным количеством символов:");
alert(evenArray);

alert("Строки с нечетным количеством символов:");
alert(oddArray);