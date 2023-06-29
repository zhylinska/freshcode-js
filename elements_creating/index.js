const div = document.createElement('div');
const body = document.body;
div.append('hello DOM');
body.append(div);


const img = document.createElement('img');
img.setAttribute('src', 'img/dog1.jpeg');
img.setAttribute('alt', 'dog');
img.classList.add('picture');
div.append(img);