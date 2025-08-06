const apikey = "fe1c3735d00ca9a33b3950f9db98eb11";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
async function ritu(){
    let jagah = document.querySelector("#country").value;
    const resp = await fetch(apiurl + `&appid=${apikey}` + `&q=${jagah}`);
    // if(resp.status == 404){
    //     document.querySelector(".error").style.display = "block";
    //     document.querySelector(".box2").style.display = "none";
    //     document.querySelector(".box3").style.display = "none";

    // }else{
    // var data = await resp.json();
    // console.log(data);
    // document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    // document.querySelector(".place").innerHTML = data.name;
    // document.querySelector(".humidity").innerHTML = data.main.humidity;
    // document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";
    //         document.querySelector(".error").style.display = "none";
    //     document.querySelector(".box2").style.display = "block";
    //     document.querySelector(".box3").style.display = "block";
    if (resp.status == 404) {
    document.querySelector(".error").style.display = "block";

    document.querySelector(".box2").style.visibility = "hidden";
    document.querySelector(".box2").style.opacity = "0";

    document.querySelector(".box3").style.visibility = "hidden";
    document.querySelector(".box3").style.opacity = "0";
} else {
    var data = await resp.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

    document.querySelector(".error").style.display = "none";

    document.querySelector(".box2").style.visibility = "visible";
    document.querySelector(".box2").style.opacity = "1";

    document.querySelector(".box3").style.visibility = "visible";
    document.querySelector(".box3").style.opacity = "1";
}
}
// async function ritu() {
//     const city = document.querySelector("#country").value.trim();
//     if (!city) return;

//     try {
//         const response = await fetch(`${apiurl}&appid=${apikey}&q=${city}`);
//         if (!response.ok) throw new Error("City not found");  // ********** IMPORTANT

//         const data = await response.json();
//         updateWeatherUI(data);
//     } catch (err) {
//         showError();
//     }
// }

// function updateWeatherUI(data) {
//     document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
//     document.querySelector(".place").innerHTML = data.name;
//     document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
//     document.querySelector(".wind-speed").innerHTML = `${data.wind.speed} km/h`;

//     document.querySelector(".error").style.display = "none";
//     showElement(".box2");
//     showElement(".box3");
// }

// function showError() {
//     document.querySelector(".error").style.display = "block";
//     hideElement(".box2");
//     hideElement(".box3");
// }

// function showElement(selector) {
//     const el = document.querySelector(selector);
//     el.style.visibility = "visible";
//     el.style.opacity = "1";
// }

// function hideElement(selector) {
//     const el = document.querySelector(selector);
//     el.style.visibility = "hidden";
//     el.style.opacity = "0";
// }
