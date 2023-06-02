//alert('2+2=' + (2+2));
//alert(`2+2 = ${2+2}`);

/*
const name1 = 'vasia';
const name2 = 'ihor';
const name3 = 'tolia';

//alert('hello, ' + name);
//alert(`hello, ${name1}, ${name2}, ${name3}!`)


const one = Number(prompt('enter first number'));
const two = Number(prompt('enter second number'));
alert(`-> ${one+two}`);
//alert('-> ' + one + '+' + two + '=' + (one+two));
 */

const user = {
    name: 'ohn',
    surname: 'doe',
    age: 35,
}
function greetingUser() {
    user.age = 15;
    alert(`hello, ${user.name} ${user.surname}! you are ${user.age+1} next year`);
}
console.log(greetingUser());
