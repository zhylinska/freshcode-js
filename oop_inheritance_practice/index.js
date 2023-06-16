class Human {
    constructor(name, surname, yearOfBirth, gender) {
        this.name = name;
        this.surname = surname;
        this.yearOfBirth = yearOfBirth;
        this.gender = gender;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('enter the name');
        }
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set surname(value) {
        if (typeof value !== 'string') {
            throw new TypeError('enter the surname');
        }
        this._surname = value;
    }
    get surname() {
        return this._surname;
    }

    set yearOfBirth(value) {
        if (typeof value !== 'number') {
            throw new TypeError('enter the year of birth');
        }
        if (value / 1000 < 1.92 || value / 1000 > 2.03) {
            throw new Error('enter the year of birth in 4 numbers(e.g. 1965');
        }
        this._yearOfBirth = value;
    }
    get yearOfBirth() {
        return this._yearOfBirth;
    }

    set gender(value) {
        if (typeof value !== 'string') {
            throw new TypeError('enter gender');
        }
        if (value !== 'male' && value !== 'female') {
            throw new RangeError('gender should be \'male\' or \'female\'');
        }
        this._gender = value;
    }
    get gender() {
        return this._gender;
    }

    greeting() {
        if (this.gender === 'male') {
            return `Hello, Mr.${this.name} ${this.surname}`;
        }
        else if (this.gender === 'female') {
            return `Hello, Mrs. ${this.name} ${this.surname}`;
        }
    }
}

class Student extends Human {
    constructor(name, surname, yearOfBirth, gender, averageScore) {
        super(name, surname, yearOfBirth, gender);
        this.averageScore = averageScore;
    }

    isExcellentStudent() {
        if (this.averageScore >= 90) {
            return true;
        } else {
            return false;
        }
    }
}

const stud = new Student('Tom', 'Sawyer', 2005, 'male', 90);
console.log(stud.isExcellentStudent());
console.log(stud.greeting());