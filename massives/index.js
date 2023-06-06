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

//concat
const array = [1,2,3];
const array2 = [3,4,5,6];
const array3 = ['string1','string2'];
array.concat(array2, array3);
console.log(array.concat(array3, array2));
 
//fill
array.fill(value, start, end);   //start-end - not necessary
const array = new Array(5);
array.fill(1); // all the massive is filled with 1

//includes
//array.includes(value, fromIndex) //value - what do we looking for, fromIndex - start of the serch
const array = [2,4,6,8,'hdgjdfgjb'];
console.log(array.includes('6'));//true

//indexOf
//array.indexOf(value, fromIndex) - value - wht we are looking for, fromIndex - start index of seach
const arrey = [1,2,3,5,9,11,3,9,3];
console.log(arrey.indexOf(3)) // - first 3-element is with index 2. if there is no 15-element in massive, then result is -1


const arr = [3, 6, 'bhnnö', 1, 4];
function findEver(array) {
    let sum = 0;
    let length = array.length;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
           sum = (sum + array[i]);
        }
        else {
            length = length - 1;
        }
    }
    return sum / length;  
}
console.log(findEver(arr));



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findSum(array) {
    return array[2] + array[4];
}
console.log(findSum(arr));
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
console.log(findSum(arr));