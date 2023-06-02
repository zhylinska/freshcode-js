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


const greets = {
    1: 'hi',
    2: 'hello',
    3: 'good morning',
}
const  valueFromUser = 3;
console.log(greets[valueFromUser]);
 

function greeting() {
    return `hello ${'name' in user ? user.name : 'anonym'}`;
}
const user = {
    name: 'john',
}
const user2 = {
    name: '',
}
console.log(greeting(user));


const user = {
    name: 'john',
    surname: 'doe',
    age: 35,
    'favourite color': 'red',
    avatar: 'https:///.....',
}
console.log(`${user.name}, ${user.surname}, ${user.age}, ${user['favourite color']}, ${user.avatar}`);

//for...in
for (let key in user) {
    console.log(`${key} - ${user[key]}`);
}
 */

const user = {
    name: 'john',
    surname: 'doe',
    age: 35,
    'favourite color': 'red',
    avatar: 'https:///.....',
}

  for (let key in user) {
    console.log(`*${key}* : "${user[key]}"`);}



