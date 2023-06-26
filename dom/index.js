function getAlert() {
    alert('hello user');
}
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);

//

function getLog() {
    console.log('hello');
}
const buttonElement2 = document.getElementById('btn2');
buttonElement2.addEventListener('mouseenter', getLog);