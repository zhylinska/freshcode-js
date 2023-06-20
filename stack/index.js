class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;

    }
    get isEmpty() {
        return this._size === 0;
    }
    get size() {
        return this._size;
    }
    get maxSize() {
        return this._maxSize;
    }
    set size(value) {
        throw new Error('access denied');
    }
    set maxSize(value) {
        throw new Error('access denied');
    }
    push(value) {
        if(this.size >= this.maxSize) {
            throw new Error('stack overflow')
        }
        this[`_${this.size}`] = value;
        //-1
        //_2...
        this._size++;
        return this.size;
    }

    pop() {
        if(this.size > 0) {
            const lastItem = this[`_${this.size - 1}`];
            delete this[`_${this.size - 1}`];
            this._size--;
            return lastItem;
        }
    }
    pick() {
        return this[`${this.size }`]
    }
}
const myStack = new Stack(4);

////////
