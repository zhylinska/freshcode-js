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
        super(color, nickname, breed);//activate inheritance from parent class Animal to child class Cat
        this.catIsGood = catIsGood;
    }

    sleep() {
        return `${this.nickname} is sleeping`
    }
}

const cat = new Cat('red', 'Murzik', 'poroda2', true);
console.log(cat.eat());

////////////////////////////////
class User {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName() {
        return `${this.name}${this.surname}`;
    }
}

class Moderator extends User {
    constructor(name, surname, age) {
        super(name, surname, age);
    }
    createPost(header, text) {
        console.log('post created');
    }
    removePost(postId) {
        console.log('post removed');
    }
    ban(userId) {
        console.log('post baned');
    }
}
    class Admin extends Moderator {
    constructor(name, surname, isAdmin) {
        super(name, surname, null);
        this.isAdmin = isAdmin;
    }
    setModerator(userId) {
        console.log('set moderator')
    }
    deleteModerator(userId) {
        console.log('delete moderator');
    }
}

const user1= new User('john', 'doe', 59); 
const mod = new Moderator('tom', 'ban', 58);
const admin = new Admin('jack', 'bin', true);

  

