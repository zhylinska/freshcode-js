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
        return this[`${this.size - 1}`]
    }
}
const myStack = new Stack(4);

////////check balance of brackets
//(a+b)*(c-d) true
//(a+b)*(c-d)) false

function checkBalanceBrackets(expression) {
    const stack = new Stack(15); //make stack with 15 el
     for(let i = 0; i < expression.length; i++) {
         const char = expression[i];
         if(char === '(' || char === '{' || char === '[') {
             stack.push(char);
         }
         else if(char  === ')' || char === '}' || char === ']') {
             if(stack.isEmpty === true) {
                 return false;
             }
             const top = stack.pop();
             
             if
             ((char === ')' && top !== '(') || (char === ']' && top !== '[') || (char === '}' && top !== '{') )
             {
                 return false;
             }
         }
    }
     return stack.isEmpty;
}

