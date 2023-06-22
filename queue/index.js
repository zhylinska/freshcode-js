/*
////queue
class Queue {
    constructor() {
        this._head = 0;
        this._tail = 0;
    }
    get size() {
        return this._tail - this._head;
    }
    enque(value) {
        this[this._tail] = value;
        this._tail++;
        return this.size;
    }
    deque() {
        if(this.size > 0) {
            const firstItem = this[this._head]
            delete this[this._head++];//current client is out
            return firstItem;
        }
        throw new Error('queue is empty')
    }
}
const queue = new Queue();
/////Map
const vocabulary = new Map();
vocabulary.set('cat', 'кіт');
vocabulary.set('dog', 'собака');

function translater(str, vocabulary) {
  const arrayWords = str.toLowerCase().trim().split(' '); 
  const translateArray = arrayWords.map((word) => {
      if(vocabulary.has(word) === true) {
          return vocabulary.get(word)
      }
      return word;
  })
    return translateArray.join(('-'));
}
/////make schedule
const schedule = new Map();
schedule.set('monday', ['art', 'nature']);
schedule.set('tuesday', ['music']);
schedule.set('wednesday', ['PE', 'math']);
schedule.set('thursday', ['math', 'art']);
schedule.set('friday', ['geography', 'music']);


///certain day schedule
console.log(schedule.get('monday'));


////find if there is schedule for day
console.log(schedule.has('monday'));


 /////how many working days are there
console.log(schedule.size);


///////////////
const user = {
    name: 'Alex',
    firstName: 'Doe',
    id: 1
}

const user2 = {
    name: 'John',
    firstName: 'Doe',
    id: 2
}
const johnMessages = ['hello', 'How are you?'];
const alexMessages = ['hi!', 'Im fine!'];
const chat = new Map();

chat.set(user.name, johnMessages);
chat.set(user2.name, alexMessages);

function createMessage(userName, newMessage, chat) {
   const userMessages = chat.get(userName);
   userMessages.push(newMessage);
}

console.log(chat.get('John'));
console.log(chat);

//////////
*/

function checkAnagramm(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const map1 = new Map();
    const map2 = new Map();

    for (let letter of str1) {
        map1.set(letter, map1.has(letter) ? map1.get(letter) + 1 : 1)
    }
    for (let letter of str2) {
        map2.set(letter, map2.has(letter) ? map2.get(letter) + 1 : 1)
    }

    if (map1.size !== map2.size) {
        return false
    }
    map1.forEach((value, key) => {
        if(map2.get(key) !== value) {
            return false
        }
    })
    return  true
}

console.log(checkAnagramm('rama', 'marÄ'));



/// array without doubles


const arrayWithDoubles = [1, 2, 3, 3, 4, 1, 7]
function  arrayWithoutDoubles(arr) {
    const set = new Set(arr);
    const arrFromSet = [...set.values()];
    return arrFromSet;
}


   
