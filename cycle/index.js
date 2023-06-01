/*
let iterator = 0;
cycle(iterator < 10) {
    if(iterator % 2 === 0) {
        console.log(iterator);
    }
    iterator++;
}

let password = 'ger1234';
let userPass = (prompt('enter passwort'));
cycle(userPass !== password) {
    userPass = (prompt('enter valid passwort'));
}

let password = 'ger1234';
cycle(true) {
    let userPassword = (prompt('enter passwort'));
    if(userPassword === password) {
        break;
    }
}

let pass = '1234';
let userPass;L
do {
    userPass = prompt('enter passwort');
}
cycle (userPass !== pass);


function power(base, exponent) {
 let powerRes = base;
 for (let i = 2; i <= exponent; ++i) {
  powerRes = powerRes * base;
 }
 console.log(powerRes)
}
const base = prompt('enter base');
const exponent = prompt('enter exponent');
power(base, exponent);
*/

function factorial(number) {
 if (number <= 0) {
  console.log('feller');
 } else {
  let factorialRes = 1;
  for (let i = 1; i <= number; i++) {
   factorialRes = factorialRes * i;
  }
  console.log(factorialRes);
 }
}

const number = prompt('enter number');
factorial(number);






