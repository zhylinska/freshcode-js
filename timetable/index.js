
function havingBreakfast(morning) {
    console.log('have breakfast');
}
function havingLunch(afternoon) {
   console.log('have lunch');
}
function havingDinner(evening) {
    console.log('have dinner');
}
const timeOfDay = (prompt('1 - morning \n 2 - afternoon \n 3 - evening'));
    switch (timeOfDay) {
        case '1':
            console.log(morning);
            break;
        case '2':
            console.log(afternoon);
            break;
        case '3':
            console.log(evening);
            break;
    }







