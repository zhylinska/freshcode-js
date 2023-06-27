

const converter = document.querySelector('#converterForm');
converter.addEventListener('submit', getConverted);
function getConverted(event) {
    event.preventDefault();

    const celcium = Number(document.querySelector('#celcium').value);
    
    let convertedDegree;
    console.log(convertedDegree = celcium * 1.80000  + 32);
    
    document.querySelector('#result').innerHTML = `${celcium} = ${convertedDegree} F`;
}

