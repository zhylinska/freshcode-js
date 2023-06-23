/*

const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'Kyiv',
        country: 'Ukraine'
    },
    contact: {
        email: 'john@example.com',
        phone: '123456789'
    }
};

const {
    name,
    address:
        { city: userCity },
    contacts:
        { email, phone }
} = user;
    
    
    console.log(name);
console.log(userCity);
console.log(email);
console.log(phone);

/////
const  map = new Map([[1, 2], [3, 4]]);
const [map1, map2] = map;
console.log(map1) // [1, 2]
///
function getFullName({firstName, lastName, ...rest}) {
    console.log(rest)
    return `${firstName} ${lastName}`;
}
getFullName({
    firstName: 'Alex',
    lastName: 'Doe',
    phone: 12344,
});
////*/
const  monitor = {
    sizes: {
        height: {
            value: 30,
            scale: 'cm'
        },
        width: {
            value: 50,
            scale: 'cm'
        }
    },
    brightness: 750,
    refresh: {
        value: 144,
        scale: 'Ggrc'
    },
    color: 'white',
    resolution: '4K'
}


function getDiag({sizes: {height: {value: a}, width: {value: b}}}) {
    return Math.sqrt(a*a+b*b);
}
console.log(getDiag(monitor));
