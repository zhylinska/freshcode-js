/*
function Cat(name, color, breed, age) { //constructor function
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function () {
        return this.name + 'run';
    }
}
const cat1 = new Cat('Bublik', 'red', null, 2);
const cat2 = new Cat('Tom', 'white', 'seam', 2);
console.log(cat1)


function Book(name, author, year, price) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.price = price;
    this.getName = function () {
        return this.name;
    }
    this.getAuthor = function () {
        return this.author;
    }
    this.getYear = function () {
        return this.year;
    }
    this.getPrice = function () {
        return this.price;
    }
    this.setName = function (newName) {    //values added
        this.name = newName;
        return this.name;
    }
    this.setPrice = function (newPrice) {   
        this.price = newPrice;
        return this.price;
    }
    this.calculateDiscountedPrice = function () {   //price with discount
        const discountedPrice = this.price - (this.price * (discountProzentage / 100));
        return discountedPrice.toFix(2); //two numbers after comma
    }
}
const book1 = new Book('name 1', 'author 1', 1951, 10.99);
const book2 = new Book('name 2', 'author 2', 1990, 15.00);



function Country(name, population, territory) {
    this.name = name;
    this.population = population;
    this.territory = territory;
    this.density = function () {
     const density = this.population / this.territory;
     return density;
    }
}
const country1 = new Country('Ukraine', 40000000, 603000);
const country2 = new Country('Germany', 83000000, 357000);

console.log(country2.density());


function Car(brand, model, volume, placeNumber, speed) {
    this.brand = brand;
    this.model = model;
    this.volume = volume;
    this.placeNumber = placeNumber;
    this.speed = speed;
    this.run = function () {
        return this.model + ' run';
    };
    this.stop = function () {
        return this.model + ' stop';
    }
}
const car1 = new Car('volvo', 'S60', 310, 5, 200);
const car2 = new Car('toyota', 'yaris', 300, 5, 240)
console.log(car1);
console.log(car2.stop());



function User(name, surname, age, email, password) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;
    this.password = password;
    this.logIn = false;
    this.signIn = function (passwordNew) {
        if (this.password === passwordNew) {
            this.logIn = true;
            return 'log in'
        } else {
            return 'password is not valid'
        }
    }
    this.getfullName = function () {
        return this.name + '' + this.surname;
    }
}
const user1 = new User('Tom', 'Grey', 35, 'tom@mail.ru', '123');
const user2 = new User('Jerry', 'Green', 31, 'jerry@mail.ru', '12345');
const passwordNew = prompt('enter password');
console.log(user1.signIn(passwordNew));

 */

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    if(this.rate < 0) {
        this.rate = 0;
        console.log('rate is invalid');
    }
    else {
        this.rate = rate;
    }
     this.days = days;
    if(this.days > 31) {
        this.days = 31;
    }
    else {
        this.days = days;
    }
     this.getSalary = function () {
        return `sum is ${this.days * this.rate}`;
     }
}
const worker1 = new Worker('Ton', 'Grey', 15, 21);
const worker2 = new Worker('Jerry', 'Green', 11, 20);
console.log(worker2.getSalary());
