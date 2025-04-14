function isUnique(arr) {
    let seenElements = [];
    for (let i = 0; i < arr.length; i++) {
        if (seenElements.includes(arr[i])) {
            return false;
        }
        seenElements.push(arr[i]);
    }
    return true;
}

console.log(isUnique([1, 2, 3, 4]));
console.log(isUnique([1, 2, 3, 2]));

/////////////////////////////////////////////////

function mergeArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    result.sort(function (a, b) {
        return a - b;
    });
    return result;
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5]));

/////////////////////////////////////////////////

function replaceNegatives(arr, replacement) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(replacement);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(replaceNegatives([-1, 2, -3, 4], 0));

/////////////////////////////////////////////////

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrime(arr) {
    let primes = [];
    for (let num of arr) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}

console.log(isPrime(7));
console.log(getPrime([1, 2, 3, 4, 5, 6, 7]));