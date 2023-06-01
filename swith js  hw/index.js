/*task1*/
const drinkNumber = (prompt('Choose the drink: \n 1 - tea \n 2 - juice \n 3 - water \n 4 - coffee \n 5 - lemonade'));

    switch (drinkNumber) {
        case '1':
            console.log('You ordered tea');
            break;

        case '2':
            console.log('You ordered juice');
            break;

        case '3':
            console.log('You ordered water');
            break;

        case '4':
            console.log('You ordered coffee');
            break;

        case '5':
            console.log('You ordered Lemonade');
            break;

       default:
            console.log('Enter from 1 to 5');
            break;
}

/*task3*/
const day = Number(prompt('enter day'));
switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('1 decad');
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log('2 decad');
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        console.log('3 decad');
        break;
    default:
        console.log('enter valid day');
        break;
}
/**/

const  monthNumber = 3;
switch (monthNumber) {
    case 1: {
        console.log('winter');
        break;
    }
    case 2: {
        console.log('winter');
        break;
    }
    case 3: {
        console.log('spring');
        break;
    }
    case 4: {
        console.log('spring');
        break;
    }
    case 5: {
        console.log('spring');
        break;
    }
    case 6: {
        console.log('summer');
        break;
    }
    case 7: {
        console.log('summer');
        break;
    }
    case 8: {
        console.log('summer');
        break;
    }
    case 9: {
        console.log('autumn');
        break;
    }
    case 10: {
        console.log('autumn');
        break;
    }
    case 11: {
        console.log('autumn');
        break;
    }
    case 12: {
        console.log('winter');
        break;
    }
    default: {
        console.log('enter from 1 to 12 number');
        break;
    }
}

/**/
const  monthNumber = 4;
switch (monthNumber) {
    case 1:
    case 2:
    case 12: {
        console.log('winter');
        break;
    }
    case 3:
    case 4:
    case 5: {
        console.log('spring');
        break;
    }
    case 6:
    case 7:
    case 8: {
        console.log('summer');
        break;
    }
    case 9:
    case 10:
    case 11: {
        console.log('autumn');
        break;
    }
    default: {
        console.log('enter from 1 to 12 number');
        break;
    }
}


