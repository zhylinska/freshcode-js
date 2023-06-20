const arr = [1, 2, 3, 4];  //lineal difficulty
function linearSearch(array, searchValue) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === searchValue) {
            return i;
        }
    }
    return -1;
}
//make table
function multiTable(limit) {  //quadrate difficulty, quantity of operations increase 10*10, 
    const table = [];
    for(let i = 0; i <= limit; i++) {
        for(let j = i; j <= limit; j++) {
            table.push(`${i}*${j} = ${i*j}`);
        }
    }
    return table;
}
//find 3
const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]  //lagorifmic difficulty
function binarySearch(array, whatToFind) {
    if ((whatToFind > array[array.length - 1]) || (whatToFind < array[0])) {
        return -Infinity;
    }
    let start = 0; //first el
    let end = array[array.length - 1]; //last el
    let middle = Math.round((start + end) / 2);


    while (true) {
        if (array[middle] === whatToFind) {
            return middle;
        }
        if (array[middle] < whatToFind) {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
        if (array[middle] > whatToFind) {
            end = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
}