/*
//short option
class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}
const  user1 = new User('john', 'doe', 55);
const  user2 = new User('jane', 'doe', 56);


class User1 {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
}
const  user3 = new User1('john', 'doe', 55);
const  user4 = new User1('jane', 'doe', 56);
console.log(user1.getFullName())


//long option
function User(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
}
 function UserProto() {
    this.getFullName = function() {
    return `${this.name} + ${this.lastName}`
    }
    User.prototype = new UserProto();

const  user1 = new User('john', 'doe', 55);
const  user2 = new User('jane', 'doe', 56);


class Worker {
    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return `${this.name}'s salary is ${this.rate*this.days}`;
    }
}

const  worker1 = new Worker('john', 12, 27);
const  worker2 = new Worker('jane', 12, 30);
console.log(worker1.getSalary())
//
const minSalary = 6000;
const workDays = 26;
const minRate = minSalary/workDays;
class Worker1 {
    constructor(name, rate = minRate, days = 0) { //if worker has a vocation we use minRate and 0, default parameters
        this.name = name;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return `${this.name}'s salary is ${this.rate*this.days}`;
    }
}
// function counting total weight for auto, fuel(according to type), passengers
class Fuel {
    constructor(volume, density) {
        this.volume = volume;
            this.density = density;
    }
    getWeight() {
        return this.volume * this.density;
    }
}
const benzin = new Fuel(50, 0.9);

const averagePassanger = 80

class Auto {
    constructor(name, ownWeight, fuel, passengersCount) {
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;
        this.passengersCount = passengersCount;
    }
  getFullWeight() {
        return this.ownWeight + this.fuel.getWeight() + (this.passengersCount * averagePassanger);
  }
}
const auto = new Auto('Lexus',4000, benzin, 2);

console.log(auto.getFullWeight());
 //

class Worker2 {
    constructor(name, rate, days) {
        this.name = name;
        this.rate = rate;
        if(typeof rate !== 'number' || typeof days !== 'number') {
            throw new TypeError('not a number');
        }
        this.days = days;
    }
    getSalary() {
        return `${this.name}'s salary is ${this.rate*this.days}`;
    }
}

const  worker5 = new Worker2('john', 500, '10');
const  worker6 = new Worker2('jane', 12, 30);
console.log(worker5.getSalary())
//
*/

/**
 * @param {number} fuel - amount of fuel in the car
 * @param {number}  consumption - fuel consumption for 100km
 * @param {string} brand
 * @param {string} model
 * distance - count the fuel in the car after some distance
 * refuel - count fuel in the car after visiting gas station
 */
class Car {
    constructor(brand, model, year, fuel, consumption) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuel = fuel;
        this.consumption = consumption;
    }
    
    set fuel(value) {
        if (typeof value !== 'number') {
            throw new Error('fuel should be numbers');
        }
        if(value < 0) {
            throw new RangeError('fuel should be more than 0');
        }
        this._fuel = value;
    }
    get fuel() {
        return this._fuel;
    }
    
    set consumption(value) {
        if (typeof value !== 'number') {
            throw new Error('consumption should be numbers');
        }
        if(value < 0) {
            throw new RangeError('consumption should be more than 0');
        }
        this._consumption = value;
    }
    get consumption() {
        return this._consumption;
    }

    drive(distance) {
        if (distance < 0) {
            throw new RangeError('distance should be more than 0');
        }
        this.fuel = this.fuel - (distance * (this.consumption / 100));
        return this.fuel;
    }
    refuel(amount) {
        if (amount < 0) {
            throw new RangeError('amount should be more than 0');
        }
        this.fuel = this.fuel + amount;
        return this.fuel;
    }
}

const car1 = new Car('Toyota', 'Camry', 2020, 50, 15);
console.log(car1.drive(150));
console.log(car1.refuel(20));