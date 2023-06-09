'use strict';   
/*//first line in js file
console.log(this);

function test() {      //function declaration
    console.log(this); //show the obj before point
}


test();
const test2 = function () {//function expression
    console.log(this);
}
test2();


const arrow = () => {
    console.log(this);
}
arrow();


function sum() {
    const arrow = () => {
        console.log(this);
    }
}
*/

const newspaper = {
    title: 'newspapers name',
    articles: [
        {
            author: 'author 1',
            date: '09.06.2023',
            text: 'lorem',
        },
        {
            author: 'author 2',
            date: '09.06.2023',
            text: 'lorem2',
        },
        {
            author: 'author 3',
            date: '09.06.2023',
            text: 'lorem3',
        },
        {
            author: 'author 4',
            date: '09.06.2023',
            text: 'lorem4',
        },
    ],
    showArticles: function () {
        this.articles.forEach((article, index) => {
            console.log(`${this.title} ${index} - ${article.author}`);
        })
    }
}
newspaper.showArticles();

///////////////////////////////////////////////////////
function  sum(a, b) {
    return a + b;
}
const arrowFun = (a, b) => { // the same as - const arrowFun = (a, b) => a + b;
    return a + b;
}


////////////////////////////////////////////////////
const arrowFun2 = x => x*x;


/////////////////////////////////
const SuperFun = () => {
    this.value = 'hello';  //'this' function can't not be =>
}

////////////////////////
const  t1 = function () {
    console.log(arguments);
}
t1(1, 2, 3, 4, 5);
////////////////////////
const t2 = () => {
    console.log(arguments);// => functions have no arguments
}
t2(); // it doesn't work

