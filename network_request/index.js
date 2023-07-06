const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('its time');
    }, 15000);
})

///

//https://noticiassalamanca.com/wp-content/uploads/2022/07/vida-eusebio.jpg
function loadImg(src) {
   const img = document.createElement('img');
   img.setAttribute('src', src);
   img.setAttribute('alt', 'picture');
   return new Promise(function (resolve, reject) {
       img.addEventListener('load', () => {
           resolve(img);
       })
       img.addEventListener('error', () => {
           clearTimeout((timeoutId))
           reject(new Error('img cannot be loaded'));
       })
       
       const timeoutId = setTimeout(() => {
          reject(new Error('time over'))
       }, 4000);
   })
}
loadImg('https://noticiassalamanca.com/wp-content/uploads/2022/07/vida-eusebio.jpg')
.then((img) => {
    document.body.append(img);
    
})
.catch((err) => {
    console.log(err);
})