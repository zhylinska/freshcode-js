
const CURRENCY = {
    USD_TO_UAH: 36.6,
    EUR_TO_UAH: 40.50,
}

const convertForm = document.querySelector('#currencyConverter');
convertForm.addEventListener('submit', convertHandler);
function convertHandler(event) {
    event.preventDefault();

    const sum = Number(document.querySelector('#sum').value);
    const currency = document.querySelector('#currency').value;

    let convertedSum;
    if (currency === 'USD') {
        convertedSum = sum * CURRENCY.USD_TO_UAH
    } else if (currency === 'Eur') {
        convertedSum = sum * CURRENCY.EUR_TO_UAH
    }
    document.querySelector('#result').innerHTML = `${sum} ${currency} = ${convertedSum.toFixed(2)} Uah`;
}
