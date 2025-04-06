let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let reversedMonths = months.reverse();
console.log("Перевернутый список месяцев:", reversedMonths);

let lastMonth = months.pop();
console.log("Последний месяц в году (удален):", lastMonth);

months.push(lastMonth);
console.log("Массив после возврата последнего месяца:", months);


let numbers = [];

for (let i = 1; i <= 10; i++) {
    let input = prompt("Введите число №" + i + ":");
    numbers.push(input);
}

let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

alert(`Это четные числа ${evenNumbers}`);


const daysOfWeek = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let userInput = [];

for (let i = 0; i < 7; i++) {
    let input = prompt("Введите строку:").toLowerCase();
    userInput.push(input);
}

let matchedDays = [];
for (let i = 0; i < userInput.length; i++) {
    if (daysOfWeek.includes(userInput[i])) {
        matchedDays.push(userInput[i]);
    }
}

if (matchedDays.length > 0) {
    console.log("Следующие строки являются днями недели:");
    console.log(matchedDays.join(", ")); // Выводим дни через запятую
} else {
    console.log("Ни одна из введённых строк не является днём недели.");
}