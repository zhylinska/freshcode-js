/*
const black = document.querySelector('.dark');
const white = document.querySelector('.light');
const thema = document.querySelector('.thema');

black.addEventListener('click', setDark);
white.addEventListener('click', setLight);

function setDark(event) {
    thema.style.backgroundColor = 'black';
    thema.style.color = 'white';
}
function setLight(event) {
    thema.style.backgroundColor = 'white';
    thema.style.color = 'black';
}



const black = document.querySelector('.dark');
const white = document.querySelector('.light');
const thema = document.querySelector('.thema');

black.addEventListener('click', setDark);
white.addEventListener('click', setLight);

function setDark(event) {
    thema.classList.add('dark');
    thema.classList.remove('light');
}
function setLight(event) {
    thema.classList.add('light');
    thema.classList.remove('dark');
}
*/
const div = document.querySelector('#root');
const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.addEventListener('click', clickHandler);
}

/*
function  clickHandler({target}) {  //
    const {dataset: {color}} = target; //
    const {parentNode} = target;
    
 */
function clickHandler({target: {dataset: {color}, parentNode}}) {
    parentNode.style.backgroundColor = color


    div.style.backgroundColor = color;
}

