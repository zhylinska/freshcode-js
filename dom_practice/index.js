const  field = document.querySelector('#game_field');
const  box = document.querySelector('#box');

field.addEventListener('click', moveBox)

function moveBox({target, clientX, clientY}) {
    const {children: {box}} = target;
    
    box.style.top = `${clientY - (box.offsetHeight / 2)}px`;
    box.style.left = `${clientX - (box.offsetWidth / 2)}px`;
}