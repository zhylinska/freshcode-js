const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
    btn.addEventListener('click', imgChanger)
}
function imgChanger(event) {
 const imgs = document.getElementsByTagName('img');
 imgs[0].src = event.target.dataset.img
    
}