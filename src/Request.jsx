import { BuildingСontent } from "./BuildingСontent";
export const keyAPP = '7e4f489c466bdc1973ccfba08a64ecb4';

export function Request(lat, lon) {
    let tumbler = document.querySelector('.checkbox');
    let url
    if (tumbler.checked === false) {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${keyAPP}`
    } else {
        url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${keyAPP}`
    } 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if (tumbler.checked === false) {
            BuildingСontent(data);
        } else {
            let array = data.list;
            BuildingСontent(array);
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
export function RequestCity() {
    let city = document.querySelector('.line').value;
    if (city === "") {
        alert('Город, населенный пункт не заполнен.')
    } else {
        let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${keyAPP}`
        let encoded = encodeURI(url);
        fetch(encoded)
        .then((response) => response.json())
        .then((data) => {
            Request(data[0].lat, data[0].lon)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}
