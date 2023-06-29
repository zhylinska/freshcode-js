

const  div = document.querySelector('.box');
const [red, green] = document.querySelectorAll('.btn');

red.addEventListener('click', setRed);
green.addEventListener('click', setGreen);

function  setRed(event) {
div.style.backgroundColor = 'red';
}

function  setGreen(event) {
    div.style.backgroundColor = 'green';
}

