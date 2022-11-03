function getInfo() {
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo/';
    let inputEl = document.getElementById('stopId');
    let ulEl = document.getElementById('buses');
    let divEl = document.getElementById('stopName');

    fetch(`${baseUrl}/${inputEl.value}`)
    .then(res => res.json())
    .then(data => {
        let name = data.name;
        let buses = data.buses;
        divEl.textContent = name;
        ulEl.innerHTML = '';
        Object.keys(buses).forEach(b=> {
            let liEl = document.createElement('li');
            liEl.textContent = `Bus ${b} arrives in ${buses[b]} minutes` ;
            ulEl.appendChild(liEl)
        })
    })
    .catch(error =>{
        divEl.textContent = 'Error';
        ulEl.innerHTML = '';
    })

}