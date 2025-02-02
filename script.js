const apikey = '64f04821dd8d4a2bbd9a048f4ac15232'
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector(".search-box input")
const searchBtn = document.querySelector(".search-box button")
const imgIcon = document.querySelector(".weather-icon")

async function weatherUpdate(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    const data = await response.json()

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector(".weather").style.display = 'none'
    }
    else {
        console.log(data)
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + '°C'
        document.querySelector("#city").innerHTML = data.name
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + ' km/hr'
        document.querySelector('.weather-description').innerHTML = data.weather[0].description

        imgIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        // if (data.weather[0].icon == "Clouds") {
        //     imgIcon.src = "images/clouds.png"
        // }
        // else if (data.weather[0].main == "Clear") {
        //     imgIcon.src = "images/clear.png"
        // }
        // else if (data.weather[0].main == "Drizzle") {
        //     imgIcon.src = "images/drizzle.png"
        // }
        // else if (data.weather[0].main == "Mist") {
        //     imgIcon.src = "images/mist.png"
        // }
        // else if (data.weather[0].main == "Rain") {
        //     imgIcon.src = "images/rain.png"
        // }
        // else if (data.weather[0].main == "Snow") {
        //     imgIcon.src = "images/snow.png"
        // }

        document.querySelector(".weather").style.display = 'block'
        document.querySelector('.error').style.display = 'none'
    }



}

searchBtn.addEventListener("click", () => {
    weatherUpdate(searchBox.value)
})

searchBox.addEventListener("keydown", (evt) => {

    if (evt.key == 'Enter') {
        weatherUpdate(searchBox.value)
    }

})



