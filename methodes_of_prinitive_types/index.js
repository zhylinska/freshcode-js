/*
function capitaliseWords(string) {
    const words = string.split(' '); //separate string into words
    for (let i = 0; i < words.length; i++)
    {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);  //
    }
    return words.join(' '); //
}


//practice
function truncate(string, stringLength) {
    if (string.length <= stringLength) {
        return string;
    } else {
        const newString = string.slice(0, srtingLength);
        newString + '...';
    }
}
*/
//hw task1
function checkSpam(str) {
    const strForCheck = str.toLowerCase()
    if (strForCheck.includes('xxx')) {
        return true;
    } else if (strForCheck.includes('viagra')) {
        return true;
    }
    return false;
}

const str = 'lghh ghjj hhztg ggzzuju gggtz';
console.log(checkSpam(str));

//hw task2
function palindrome(str2) {
    const strPalindrome = str2.toLowerCase();
    if (strPalindrome.split('').reverse().join('') == strPalindrome) {
        return 'palindrome'
    }
    return 'not palindrome';
}
    
const str2 = 'mannam';
console.log(palindrome(str2));
  

