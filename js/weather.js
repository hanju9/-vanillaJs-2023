const API_KEY = "0705f4257557cabd5785ca27667fae50";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText= data.name; 
        weather.innerText= `${data.weather[0].main} / ${Math.floor(data.main.temp - 273.15)}°C`;
    });
}
function onGeoError(){
    alert("오류 오류 위치 못 찾았다.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
