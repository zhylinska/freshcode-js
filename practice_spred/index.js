//task1 - stick massives in one
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 11, 12, 13, 14, 15];
const arr = [...arr1, ...arr2];
console.log(arr)


/*task - if in odd massive number is on odd index(index in massive inside number), change number with 'oo'
          if even number is on even index - 'ee'
          if odd number is on even index - 'oe'
           if even number is on odd index - 'eo'   
 */
const number = [[1, 2, 3, 4], [4, 5, 6], [7, 8, 9], [19, 11, 12]];

function showCode(number) {
    for (let i = 0; i < number.length; i++)
        if (i % 2 === 0) {
            for (let j = 0; j < number[i].length; j++) {
                if (j % 2 === 0) {
                    console.log('oo');
                } else {
                    console.log('oe');
                }
            }

        } else {
            for (let j = 0; j < number[i].length; j++) {
                if (j % 2 === 0) {
                    console.log('eo');
                } else {
                    console.log('ee');
                }
            }

        }
}

console.log(showCode(number));


//task - sum all the numbers from massive with reduce
const arr4 = [1, 2, 3, 4, 5, 6, 7];
const totalSum = arr4.reduce(function (sum, elem) {
    return sum + elem;
});
console.log(totalSum);

//task - arrow
const arr5 = [1, 2, 3, 4, 5, 6, 7];
const totalSum5 = arr5.reduce((sum, elem) => sum + elem);
console.log(totalSum5);


//task1 - show all the el of massive with rest
function print(...numbers) {
    return numbers;
}
console.log(print(1, 2, 3, 4));

//task2 - find the biggest number in massive with rest
function printBiggest(...num) {
    let biggest = num[0];
    for (let i = 1; i < num.length; i++) {
        if (biggest <= num[i]) {
            biggest = num[i];
        }
    }
    return biggest;
}
printBiggest(1, 15, 3);

//task3 - connect two massives with spread
const mas1 = [1, 2, 3];
const mas2 = [4, 5, 6];
const mas = [...mas1, ...mas2];
console.log(mas);


//task4 -

function del(massive, ...index) {

}
del([1, 2, 3], 0, 1, 2);
//task5 - 
function add(massive2, ...elements) {
    return [...massive2, ...elements];
}
//const h=add([1, 2, 3], 5, 6, 7);
console.log(add([1, 2, 3], 5, 6, 7));


//[1, 2, 3, 4,5, 6, 7]
//task6 -
const mas6 = [1, 2, 4, 2, 3, 1];
function findRepeated(mas6) {
    for(let i = 0; i < mas6.length; i++) {
      
    }
}




  





  




