


//task1

const diameter = Number(prompt('enter diameter'));

function circumference() {
    if(diameter < 0) {
        throw new TypeError('diameter should be > 0');
    }
  return C = 3.14 * diameter;
}
console.log(circumference());



//task2
/**
* @author - iryna
* @param {number} width of figure >0
* @param {number} height of figure >0
*@returns {number} return area of figure
*/

const width = Number(prompt('enter width'));
const height = Number(prompt('enter height'));
alert(`area is ${width*height}`);

//task3
const d = Number(prompt('enter d'));
const h = Number(prompt('enter height'));
alert(`area is ${h*3.14*((d**2)/4)}`);


//task4
const start = Number(prompt('enter first number'));
const end = Number(prompt('enter last number'));
function findNumber() {
    for (let i = start; i <= end; ++i) {
       if(i % 5 === 0) {
          console.log(i);
       }
    }
}
console.log(findNumber());
/*
//task5
function findFizz() {
    for (let i = 1; i <= 100; ++i) {
        if(i % 3 === 0) {
            console.log('fizz')
        } else if(i % 5 === 0) {
         console.log('buzz');
        }
        else {
            console.log(i);
        }
    }
}
console.log(findFizz());

//task6
const a = Number(prompt('enter a<>0'));
const b = Number(prompt('enter b'));
const c = Number(prompt('enter c'));
function findX(a, b, c) {
    let D = (b ** 2) - 4 * a * c;
    if (D < 0) {
        console.log('no roots');
    } else if (D === 0) {
        console.log(`x = ${(-b + Math.sqrt(D)) / (2 * a)}`)
    } else if (D > 0) {
        let xOne = `${(-b + Math.sqrt(D)) / (2 * a)}`;
        console.log('root one ' + xOne);
        let xTwo = `${(-b - Math.sqrt(D)) / (2 * a)}`;
        console.log('root two ' + xTwo);
    }
}
console.log(findX(a, b, c));
*/

