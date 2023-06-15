class Animal {   //superclass
    constructor(color, nickname, breed) {
        this.colo = color;
        this.nickname = nickname;
        this.breed = breed;
    }

    eat() {
        return `${this.nickname} is eating`
    }
}

/*
const anim = new Animal('black', 'Murka', 'poroda1');
console.log(anim.eat());

//
class Cat {
    constructor(color, nickname, breed) {
        this.colo = color;
        this.nickname = nickname;
        this.breed = breed;
    }
    eat() {
        return `${this.nickname} is eating`
    }
    sleep() {
        return `${this.nickname} is sleeping`
    }
}
const cat = new Cat('red', 'Murzik', 'poroda2');
console.log(cat.eat());
*/

// we can remove elements same for Anim and Cat

class Cat extends Animal {  //class with inheritance
    constructor(color, nickname, breed, catIsGood) {
        super(color, nickname, breed);
        this.catIsGood = catIsGood;
    }
    sleep() {
        return `${this.nickname} is sleeping`
    }
}

const cat = new Cat('red', 'Murzik', 'poroda2', true);
console.log(cat.eat());
