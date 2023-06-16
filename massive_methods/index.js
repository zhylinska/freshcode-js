/*
//concat
const array = [1,2,3];
const array2 = [3,4,5,6];
const array3 = ['string1','string2'];
array.concat(array2, array3);
console.log(array.concat(array3, array2));
/////////////////////////////////////
//fill
array.fill(value, start, end);   //start-end - not necessary
const array = new Array(5);
array.fill(1); // all the massive is filled with 1
////////////////////////////////////////////////
//includes
//array.includes(value, fromIndex) //value - what do we looking for, fromIndex - start of the serch
const array = [2,4,6,8,'hdgjdfgjb'];
console.log(array.includes('6'));//true
///////////////////////////////////////////////////////////////
//indexOf
//array.indexOf(value, fromIndex) - value - wht we are looking for, fromIndex - start index of seach
const array = [1,2,3,5,9,11,3,9,3];
console.log(arrey.indexOf(3)) // - first 3-element is with index 2. if there is no 15-element in massive, then result is -1
//////////////////////////////////////////////////////////
//join - make string
const array1 = ['hello', 'tom', 4];
console.log(array1.join(' '));
/////////////////////////////////////////////////////////////
//push - add elements at the end of massive
const array = [1, 3, 5, 7, 1];
array.push(2);
array.push('hello', 'tom');
console.log(array.push());
///////////////////////////////////
//pop - delete last el and return its value
const array = [1, 3, 5, 7, 1];
array.pop();
console.log(array.pop());
console.log(array)
/////////////////////////////////////////////////
//shift - delete first element and return value(or undefined is element was empty
const array = [3, 5, 7, 1];
array.shift();
console.log(array)


//unshift - add one or few el at the start
const array = [3, 5, 7, 1];
array.unshift('el1', 'el2');
console.log(array)

//reverse - change order of el in massive
const array = [3, 5, 7, 1];
array.reverse();
console.log(array)


//slice(start, end) - include start, exclude end
const array = [1, 2, 3, 4, 5];
//console.log(array.slice(2, 4));//3, 4
console.log(array.slice(-1));//last element
 
/////////////////////////////////
 const users = [
     {name: 'john',
     surname: 'doe'},
{name: 'tom',
    surname: 'doe'},
     {name: 'jack',
         surname: 'doe'}, 
 ];
 console.log(users.slice(1, 2))

const newUsers = users.slice(0);
 console.log(newUsers)
 

//array.splice(start, deleteCount, item1, item2); //start - start of changings; deleteCount - amount od elements to be deleted, item1 - adding new

const array = [2, 4, 7, 2, 12];
array.splice(2, 1); //delete one el starting with 3 el. delete 7
array.splice(2, 3); //delete 7, 2, 12
array.splice(2); //delete all el starting with 2.  7, 2, 12



//put after 2 string ''
const array = [2, 4, 7, 2, 12];
array.splice(2, 0, 'hello');// 2, 4, hello, 7, 2, 12


const array = [1, 2, 3, 4, 5];
console.log(array.slice(1, 2));

const array2 = [1, 2, 3, 4];
const newArray = array2.slice(1)


const array3 = [1, 2, 3, 4, 5];
console.log(array3.slice(1, 3));
console.log(array3.splice(1, 0, 'w', 'tr-td'));
console.log(array3.splice(6, 0, 'vv'));
console.log(array3.splice(8, 0, 'aa')); //arr3.push('aa')

////////////////////////
//forEach - action with each el of massive
//array.forEach(callbackFunction)

function square(a) {
    console.log(a*a)
}
const array4 = [1, 2, 3, 4, 5];
array4.forEach(square);// 1, 4, 9...
array4.forEach((item, index, array) => {
    console.log(item*item);
    console.log(index);
    console.log(array4);
    console.log('----------');

})

//map//////////////////////////////////////
function square(a) {
    return a * a;
}
const array = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const newArray = array.map(square);
const newArray2 = array.map((item, index, array) => {
    return item * item;  
})
////////////////////////////////


 
function t() {
    console.log(arguments);
    arguments[0] = 'new value';
    arguments[1] = 'new value 2';
    console.log(arguments);
}
t();
console.log(t); //return function
console.dir(t); //return full structure of object

/////////////////////////////////////////
function sum() {
    const arrayArgs = Array.from(arguments);//normal massive from 'arguments'
    let sum = 0;
    for (let i = 0; i < arrayArgs.length; i++) {
        sum = sum + arrayArgs[i];
    }
    console.log(sum / arrayArgs.length);
    return sum;
}
console.log(sum(5, 2, 8, 3));

/////////////////////////////////
const array = [2, 3, 4, 5];
const newArray = array.map((item) => {
    return item * 2;
})

//sort//////////////////////////////////////
const array = [2, 3, 4, 5, 10, 3];
 array.sort();
const array2 = ['bbb', 'aaa', 'abb', 'aba'];

array.sort(); 
array2.sort();//randome sorting

function  compareFunctions(a, b) { //a and b - neighbours in massive
  if(b > a) {                       //sorting from smaller to bigger. option 1
      return -1;
  }  
  else {
      return 1;
  }
}
array.sort(compareFunctions);

/////////////////////
const array2 = [2, 3, 4, 5, 10, 3];
array2.sort();
function  compareFunctions(a, b) {
    return b - a;  //from bigger to smaller
}
array2.sort(compareFunctions);

//filter///////////////////////////////////////
//array.filter(callback);
const array = [5, 3, -9, -21, -5, 1, -1, -2]; //make massive from positive numbers
function filterFunction(elem) {
    if(elem > 0) {//
        return true//return elem > 0 - the same result
    }//
    else {//
        return false//
    }//
}
const filterArray = array.filter(filterFunction);


//reduce//////////////////////
//array.reduce(callBack, initialValue)
const array = [2, 3, 4, 7, 9, 12, 100];

function reducer(accumulator, elemInMassive) {
    return accumulator + elemInMassive;
}

const sum = array.reduce(reducer, 0);

 */
//task1 - make fullname for adult users
const users = [
    {
        name: 'joke',
        surname: 'doe',
        age: 21,
        email: 'ghhhg@com',
    },
    {
        name: 'tom',
        surname: 'doe',
        age: 22,
        email: 'ghhhg@com',
    },
    {
        name: 'jack',
        surname: 'doe',
        age: 15,
        email: 'ghhhg@com',
    },
];
function filterAdults(users) {
    return users.age >= 18;
}
const adultUsers = users.filter(filterAdults);
function makeFullName(adultUsers) {
    return {
        fullname: `${adultUsers.name} ${adultUsers.surname}`,
        age: adultUsers.age,
        email: adultUsers.email,
    }
}
const fullName = adultUsers.map(makeFullName);
console.log(fullName);


//task2 - make order from small to big
const massive = [1, 5, 8, 4, 12, 3];

function compareNumbersSmaller(a, b) {
    return a - b;
}
console.log(massive.sort(compareNumbersSmaller));


//task3 - make order from big to small
const massive1 = [1, 5, 8, 4, 12, 3];
function compareNumbersBigger(b, c) {
    return c - b;
}
console.log(massive1.sort(compareNumbersBigger));


//task4 - find odd numbers
const massive2 = [5, 7, 1, 8, 12, 4, -3, -2, 0];
function findEven(item) {
    if (item !== 0) {
        return item % 2 === 0;
    }
}
const oddNumbers = massive2.filter(findEven);
console.log(oddNumbers);


//task5 - make sum
const massive3 = [2, 2, 7, 3, 8, -1, 5, 3];

const sum = massive3.reduce(function (sum, item) {  
    return sum + item;
}, 0);
console.log(sum);


//task6 - substract each element
const massive4 = [1, -4, 2, 10, 2, -3];
const substr = massive4.reduce(function (substr, item) { 
    return substr - item;
}, 0);
console.log(substr);


//task7 - find sum of odd numbers
const massive5 = [3, -4, 8, 11, 3, 2];//const sum = massive3.reduce((oddSum, item) => { if(item % 2 === 0) { oddSum + item; }  return oddSum }, 0);
/*function filterOddItem(item) {
   return item % 2 === 0;
}
const filterMassive = massive5.filter(filterOddItem);
console.log(filterMassive);

const oddSum = filterMassive.reduce(function (oddSum, item) {
        return oddSum + item;
}, 0); */
const sum = massive3.reduce((oddSum, item) => { if(item % 2 === 0) { oddSum + item }  return oddSum }, 0);
console.log(oddSum);  


//task8 - make only names massive. reverse result
const catArray = [
    {
        name: 'Murzik',
        color: 'black',
        weight: 3,
        age: 2,
    },
    {
        name: 'tom',
        color: 'grey',
        weight: 5,
        age: 3,
    },
    {
        name: 'Cookie',
        color: 'brown',
        weight: 5,
        age: 2,
    },
];
function makeNameList(catArray) {
    return catArray.name;
}
const nameList = catArray.map(makeNameList).reverse();// const nameList = catArray.map((catArray) => { return catArray.name })

console.log(nameList);

//task9 - make new massive with elem multiple two
const arrNative = [1, 12, 90, 5];
function multTwo(element) {
    return element * 2
}

const arrNew = arrNative.map(multTwo);
console.log(arrNew);
console.log(arrNative);
  


 



