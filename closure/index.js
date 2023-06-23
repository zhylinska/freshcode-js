/*
function  counter() {
    let i = 0;
    i++;
    return i;
}
///
 */
function makeCounter() {
   let i = 0;
    return function() {
        return ++i;
    }
}
const  fn = makeCounter();
///