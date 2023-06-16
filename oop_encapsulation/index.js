class Figure {
    constructor(sideQuantity) {
        this.sideQuantity = sideQuantity;
    }

    getArea() {

    }
}

class Triangle extends Figure {
    constructor(a, b, angle) {
        super(3);
        this.a = a;
        this.b = b;
        this.angle = angle;
    }
    get a() {
        return this._a;
    }
    set a(value) {
        if(value < 0) {
            throw RangeError('side should be > 0')
        }
        this._a = value;
    }
    
    get b() {
        return this._b;
    }
    set b(value) {
        if(value < 0) {
            throw RangeError('side should be > 0')
        }
        this._b = value;
    }

    get angle() {
        return this._angle;
    }
    set angle(value) {
        if(value < 0) {
            throw RangeError('angle should be > 0')
        }
        this._angle = value;
    }
    
    getArea() {
        return this.a * this.b * Math.sin(this.angle);
    }
}

class Square extends Figure {
    constructor(a) {
        super(4);
        this.a = a;
    }

    get a() {
        return this._a;
    }
    set a(value) {
        if(value < 0) {
            throw RangeError('side should be > 0')
        }
        this._a = value;
    }

    getArea() {
        return this.a * this.a;
    }
}

const sq = new Square(5);


