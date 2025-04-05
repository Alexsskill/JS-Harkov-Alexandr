// task 1
let input = prompt("Введите число:");

if (typeof Number(input) === "number") {
    let number = Number(input);

    if (number % 2 === 0) {
        alert(`Число ${number} четное.`);
    } else {
        alert(`Число ${number} нечетное.`);
    }
} else {
    alert("Ошибка: вы ввели не число.");
}

//task 2
let amountInUSD = parseFloat(prompt("Введите сумму в долларах США:"));
let kurs = 96;
let targetCurrency = "рублях";
let convertedAmount = amountInUSD * kurs;

alert(`Сумма в ${targetCurrency}: ${convertedAmount}`);
