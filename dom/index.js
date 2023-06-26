function getAlert(event) {
    const btn = event.target;
   if(btn.style.backgroundColor === 'red') {
       btn.style.backgroundColor = 'unset';
       
   }
   else {
       btn.style.backgroundColor = 'red'
   }
   
    console.log(event);
}
const buttonElement = document.getElementById('btn');
buttonElement.addEventListener('click', getAlert);


//

function getLog() {
    console.log('hello');
}
const buttonElement2 = document.getElementById('btn2');
buttonElement2.addEventListener('mouseenter', getLog);

//

function getDeleted(event) {
    const btn = event.target;
    btn3.style.display = 'none';
    }  
    
const buttonElement3 = document.getElementById('btn3');
buttonElement3.addEventListener('click', getDeleted);