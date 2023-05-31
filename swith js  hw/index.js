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



