//ex 1
function MyArray() {
    this.lenght = 0;
// add elements to massive with push
    this.push = function (elementValue) {
        this[this.lenght] = elementValue; //this[key] = elementValue - we add new element to massive
        this.lenght++;
        return this.lenght; // consolloge lenght of massive
    }


// delete with pop last element 
    this.pop = function () {
        if (this.lenght > 0) {
            let lastItem = this[this.lenght - 1];
            delete this[this.lenght - 1]; //delete last el
            this.lenght--;
            return lastItem;
        }
    }
    
    //forEach
    this.forEach = function (callback) {
        for(let i = 0; i < this.lenght; i++) {
            callback(this[i], i, this);
        }
    }
}
const  arr = new MyArray();