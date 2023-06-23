/*
function  counter() {
    let i = 0;
    i++;
    return i;
}
///
 
function makeCounter() {
   let i = 0;
    return function() {
        return ++i;
    }
}
const  fn = makeCounter();
///


function makeAdder(first) {
    return function(second) {
        return first + second;
    }
}
///
*/
function isCorrectPassword(truePassword) {
    return function (checkedPassword) {
        if(checkedPassword === truePassword) {
            return true;
        }
        else { 
            return false
        }
    }
} 
const checkPassword = isCorrectPassword(112);