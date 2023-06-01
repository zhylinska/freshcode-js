/*
let obj = {
    color: 'red',
    fontSize: 2,
    favouriteFood: 'fish'
}

let bulb = {
    lightness: 200,
    power: '200W',
    'averege price': 1,
    on: function () {
        return 'the light on'
    }
}
console.log(bulb.lightness)
console.log(bulb['averege price']);
bulb.on();

const cat1 = { }
const cat2 = object();
const cat3 = new Object();

 */

const person = {
    eyeColor: 'brown',
    hairColor: 'blond',
    height: '1.75m',
    weight: '70kg',
    run: function () {
        return 'run';
    },
    sleep: function () {
        return 'sleep'
    },
}

person.hairColor = 'blue'; //change value

delete person.eyeColor; //delete value or method


console.log(person.eyeColor);
console.log(person.run());

