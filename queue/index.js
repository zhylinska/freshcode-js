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
/////
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





   
