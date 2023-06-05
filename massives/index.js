/*
//task1
const array = [1,2,3,4,5,6,7];
for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

//task2
const arr = [3, 6, 8, 2, 3, 5, 1, 3];

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(sumArray(arr));

//task3
const arr = [3, 6, 8, 2, 3, 5, 1, 3];

function findBiggest(array) {
    let biggest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
            biggest = array[i];
        }
    }
    return biggest;
}
   console.log(findBiggest(arr)) ;
*/
//concat
const array = [1,2,3];
const array2 = [3,4,5,6];
const array3 = ['string1','string2'];
array.concat(array2, array3);
console.log(array.concat(array3, array2));