//prototypes
//__proto__ - literal option
/*
const cat = {                 //values and methodes
    name: 'barsik',
    color: 'red',
    age: 1,
}
const cat2 = {                 //values and methods
    name: 'murzik',
    color: 'black',
    age: 5,
}

const catMethods = {                      //prototype
    run: function () {
        console.log('cat is running');
    },
    meow: function () {
        console.log('meow');
    },
}
cat.__proto__ = catMethods;
cat2.__proto__ = catMethods;

//////////////////////////////////////////////
function MyArray() {
    this.lenght = 0;
}

const  myProtoArray = {
    push: function (elementValue) {
        this[this.lenght] = elementValue; //this[key] = elementValue - we add new element to massive
        this.lenght++;
        return this.lenght; // consollog lenght of massive
    },

    pop: function () {
        if (this.lenght > 0) {
            let lastItem = this[this.lenght - 1];
            delete this[this.lenght - 1]; //delete last el
            this.lenght--;
            return lastItem;
        }
    },

    forEach: function (callback) {
        for (let i = 0; i < this.lenght; i++) {
            callback(this[i], i, this);
        }
    }
}
const arr = new MyArray();

*/

////////////task - make stairs counter with prototype

function CountStairs() {
    this.currentStair = 0;
}

function ProtoCountStairs() {
    this.stairDown = function () {
        this.currentStair--;
        return this;
    }
    this.stairUp = function() {
      this.currentStair++;
      return this;
    }
    this.stairShow = function() {
        return this.currentStair;
    }
}

const proto = new ProtoCountStairs();
CountStairs.prototype = proto;

const t = new CountStairs();
console.log(t.stairShow())







