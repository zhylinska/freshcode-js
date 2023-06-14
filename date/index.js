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

/*
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
*/

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