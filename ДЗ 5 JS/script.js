
// function findMinNumber(number1, number2) {
//     if (number1 < number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }

// let result = findMinNumber(10, 5);
// console.log("Меньшее число: " + result);

//////////////////////////////////////////////////////////

// function raiseToADegree(number, degree) {
//     let result = 1;

//     for (let i = 0; i < degree; i++) {
//         result = result * number;
//     }
//     return result;
// }

// let number = 2;
// let degree = 3;
// let resultt = raiseToADegree(number, degree);
// console.log("Результат:", resultt);

//////////////////////////////////////////////////////////

// function calculate(num1, num2, operator) {
//     let result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 === 0) {
//             return "Ошибка: деление на ноль!";
//         }
//         result = num1 / num2;
//     }
//     return result;
// }

// console.log(calculate(10, 5, '+'));
// console.log(calculate(10, 5, '-'));
// console.log(calculate(10, 5, '*'));
// console.log(calculate(10, 5, '/'));
// console.log(calculate(10, 0, '/'));

//////////////////////////////////////////////////////////

// function primeNumber(number) {
//     if (number < 2) {
//         return false;
//     }

//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(primeNumber(1));
// console.log(primeNumber(8));
// console.log(primeNumber(3));

//////////////////////////////////////////////////////////

// function multiplicationTable(number) {
//     console.log(`Таблица умножения для числа ${number}:`);
//     for (let i = 1; i <= 10; i++) {
//         let result = number * i;
//         console.log(`${number} x ${i} = ${result}`);
//     }
//     console.log('///////////////');
// }

// for (let num = 2; num <= 9; num++) {
//     multiplicationTable(num);
// }

//////////////////////////////////////////////////////////

function printNumbers(start, end, isEven) {

    for (let i = start; i <= end; i++) {
        if (isEven && i % 2 === 0) {
            console.log(`"Четные числа", ${i}`);
        }
        else if (!isEven && i % 2 !== 0) {
            console.log(`"Нечетные числа", ${i}`);
        }
    }
}

console.log(printNumbers(1, 5, true));
console.log(printNumbers(1, 5, false));

//////////////////////////////////////////////////////////

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true; // Високосный
    }
    if (year % 100 === 0) {
        return false; // Не високосный
    }
    if (year % 4 === 0) {
        return true; // Високосный
    }
    return false; // Не високосный
}

function getNextDay(day, month, year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (isLeapYear(year)) {
        daysInMonth[1] = 29;
    }

    day += 1;

    if (day > daysInMonth[month - 1]) {
        day = 1;
        month += 1;

        if (month > 12) {
            month = 1;
            year += 1;
        }
    }
}

console.log(getNextDay(31, 12, 2022)); // "01.01.2023"
console.log(getNextDay(28, 2, 2020));  // "29.02.2020" (високосный год)
console.log(getNextDay(28, 2, 2021));  // "01.03.2021" (не високосный год)
console.log(getNextDay(31, 1, 2023));  // "01.02.2023"