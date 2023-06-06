/*
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
const array = [1,2,3,5,9,11,3,9,3];
console.log(arrey.indexOf(3)) // - first 3-element is with index 2. if there is no 15-element in massive, then result is -1


//join - make string
const array1 = ['hello', 'tom', 4];
console.log(array1.join(' '));

 
//push - add elements at the end of massive
const array = [1, 3, 5, 7, 1];
array.push(2);
array.push('hello', 'tom');
console.log(array.push());


//pop - delete last el and return its value
const array = [1, 3, 5, 7, 1];
array.pop();
console.log(array.pop());
console.log(array)


//shift - delere first element and repurn value(or undefined is element was empty
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

 */
