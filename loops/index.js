//task1 if/else
function findOddEven(number) {
    if (number % 2 === 0) {
        return `${number} is odd`;
    } else {
        return `${number} is even`;
    }
}

console.log(findOddEven(2));

//task2
function checkScore(score) {
    if (score > 90) {
        return 'A';
    }
    if ((score >= 80) && (score < 90)) {
        return 'B';
    }
    if ((score >= 70) && (score < 80)) {
        return 'C';
    }
    if ((score >= 60) && (score < 70)) {
        return 'D';
    }
    if (score < 60) {
        return 'F'
    }
}

console.log(checkScore(65));

//task3
function findPositiveNegative(number) {
    if (number < 0) {
        return `${number} is negative`;
    } else {
        return `${number} is positive`;
    }
}

console.log(findPositiveNegative(2));

//task4
function findAdult(number) {
    if (number >= 18) {
        return `you are eligible to vote`;
    } else {
        return `you are not eligible to vote`;
    }
}

console.log(findAdult(19));

//task5
function checkDaytime(time) {
    if ((time >= 6) && (time < 12)) {
        return `it's morning`;
    } else if ((time >= 12) && (time < 17)) {
        return `it's afternoon`;
    } else if ((time >= 17) && (time < 23)) {
        return `it's evening`;
    } else if ((time >= 23) || (time <= 24) && (time < 6)) {
        return `it's night`;
    }
}

console.log(checkDaytime(23));

//task6
const checkYear = (year) => {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0) ? `leap` : `not leap`;
}
console.log(checkYear(2022))

//task7
function findPalindrome(string) {
    if (string.toLowerCase().split('').reverse().join('') == string) {
        return `palindrome`
    } else {
        return `not palindrome`
    }
}

console.log(findPalindrome('annaa'));

//task8
const checkNumber = (number) => {
    return (number % 3 === 0) && (number % 5 === 0) ? `true` : `false`;
}
console.log(checkNumber(16));

//task9
function checkBMI(BMI) {
    if (BMI < 18.5) {
        return `underweight`;
    } else if ((BMI >= 18.5) && (BMI < 24.9)) {
        return `normal weight`;
    } else if ((BMI >= 25) && (BMI < 29.9)) {
        return `overweight`;
    } else if (BMI > 30) {
        return `obese`;
    }
}

console.log(checkBMI(25));

//task10
const checkDiscount = (age) => {
    return (age >= 60 ? `get discount` : `no discount`);
}
console.log(checkDiscount(16));

//task1 for
function printNumber() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printNumber(10);

//task2
function printEvenSum() {
    let sum = 0;
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(printEvenSum());

//task3
function printName() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

const arr = ['name1', 'name2', 'name3'];
printName(arr);

//task4
function printMultiplication(number) {
    let res = 0;
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}

printMultiplication(3);

//task5 
function countOccurencies(str, substr) {
    const character = str.toLowerCase().split('');
    let n = 0;
    for (let i = 0; i < str.length; i++) {
        if (character[i] === substr) {
            n = n + 1
        }
    }
    return `${substr} ${n}`
}

console.log(countOccurencies('ttst', 't'));


//task1 while
function printNumber2() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

printNumber2();

//task2
function printEvenSum2() {
    let sum = 0;
    let i = 1;
    while (i <= 20) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
        i++
    }
    return sum;
}

console.log(printEvenSum2());

//task3
function printName2(array) {
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
}

const array = ['name1', 'name2', 'name3'];
printName2(array);

//task4
/*
function guessNumber() {
    let num = 0;
    while (num < 11) {
        num = prompt('enter number more than 10');
    }
}
guessNumber()
*/

//task5
function countOccurencies2(str, substr) {
    const character = str.toLowerCase().split('');
    let n = 0;
    let i = 0;
    while (i < str.length) {
        if (character[i] === substr) {
            n = n + 1
        }
        i++;
    }
    return `${substr} ${n}`
}

console.log(countOccurencies2('tts', 't'));

//task1 do/while
function printNumber3() {
    let i = 1;
    do {
        console.log(i);
        i++;
    }
    while (i <= 10)
}

printNumber3();

//task2
function printEvenSum3() {
    let sum = 0;
    let i = 1;
    do {
        if (i % 2 === 0) {
            sum = sum + i;
        }
        i++
    }
    while (i <= 20)
    return sum;
}

console.log(printEvenSum3());

//task3  

function guessPassword(validPassword) {
    let password;
    do {
      password = prompt('enter password')
        }
    while (password != validPassword);
   
}
guessPassword(1234);

/*
//task4   
function guessNumber3(correctNumber) {
    let num;
    do {
            num = prompt('***enter number from 1 to 10');
        console.log(num);
    }
    while (num != correctNumber);
}

guessNumber3(9)

//task5

function findPositiveNumber() {
    let num = -5;
    do {
        if (num <= 0) {
            num = prompt('enter number');
        }
    }
    while (num <= 0);
}*/

findPositiveNumber();





    


