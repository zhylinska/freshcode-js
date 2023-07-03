
/*
const root = document.querySelector('#root');

function createCard(user) {
    //article
    const article = document.createElement('article');
    article.classList.add('card_wrapper');
    //img
    const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card_img');

    //h2
    const h2 = document.createElement('h2');
    h2.append(user.name);
    h2.classList.add('user_name');

    //paragraph
    const p = document.createElement('p');
    p.append(user.description);
    p.classList.add('description');

    //article + img + h2 + p
    article.append(img, h2, p);

    //article
    return article
}

//make massive of articles from data massive
const cardArray = data.map((user) => createCard(user));

//spread this massive of articles and add to root
root.append(...cardArray);

*/

///
/**
 *
 * @param {String} tagName - tag of elem, which we have to create
 * @param {Object} options
 * @param {String} options.classNames - list of classes
 * @param {Node} children - list of children knots
 * @return {HTMLElement} - created elem
 */
const root = document.querySelector('#root');

function createCard(user) {
//article
    const article = createElement('article', {classNames: ['card_wrapper']});
//img
  const img = document.createElement('img');
    img.setAttribute('src', user.profilePicture);
    img.setAttribute('alt', user.name);
    img.classList.add('card_img');
//img_wrapper
    const imgWrapper = createElement('div', {classNames: ['img_wrapper']}, img);
//h2
    const h2 = createElement('h2', {classNames: ['user_name']}, user.name);
//p
    const p = createElement('p', {classNames: ['description']}, user.description);

//article + img + h2 + p
    article.append(imgWrapper, h2, p);

//article
    return article
}

//make massive of articles from data massive
const cardArray = data.map((user) => createCard(user));

//spread this massive of articles and add to root
root.append(...cardArray);

function createElement(tagName, {classNames}, ...children) {
    const elem = document.createElement(tagName);
    elem.classList.add(...classNames);
    elem.append(...children);

    return elem;
}

//////