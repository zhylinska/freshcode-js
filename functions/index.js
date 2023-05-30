/*
function  getMultiplicationOfTwo(a, b) {
    let result = a * b;
    return result;
}
const res = getMultiplicationOfTwo(5, 8);
console.log(res);
function addFiveResult(number) {
 let result = number + 5;
console.log('the sum is ' + result);
}
addFiveResult(15);

 */


/*task1*/
function findBiggerNumber(numOne, numTwo) {
    if (numOne > numTwo) {
        result = numOne;
    } else {
        result = numTwo;
    }
    return result;
}

console.log(findBiggerNumber(11, 7))

/*task2*/
function arithmeticMean(numOne, numTwo) {
    result = (numOne + numTwo) / 2;
    return result;
}
console.log(arithmeticMean(11, 7));

/*task3*/
function evenOdd(numOne) {
    if (numOne % 2 === 0)
        result = 'even';
    else {
        result = '0dd'
    }
    return result;
}
console.log(evenOdd(12));


