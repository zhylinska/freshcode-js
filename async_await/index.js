


const  URL = 'https://randomeuser.me/api/'

    function loadDataWithoutAsync(url) {
    const p = fetch(url);
    p.then((response) => {
        return response.json()
    })
    jsonUsers.then((data) => {
        console.log(data)
    })
}
//loadDataWithoutAsync(URL);

////ASYNC/AWAIT
async function loadDataAsync(url) {
    const p = fetch(url);
    const response = await p;
    const data = await response.json();
    console.log(data);
    }

    loadDataAsync(URL);
