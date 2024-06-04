let key = "41b593720d8d16089c7896788021729a"
let searchInput = document.querySelector('.weather-search input')
let searchButton = document.querySelector('.weather-search button')
const postsAll = document.querySelector(".weather-app")

const abc = searchButton.addEventListener("click", (e) => {
    e.preventDefault()


    searchInput.value
    const requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput.value}&units=metric&appid=${key}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', requestURL)
    xhr.responseType = 'json'
    xhr.onload = () => {
    const data = xhr.response;
    console.log(data);


    postsAll.innerHTML = ""

    for(let i = 0; i < data.list.length; i++) {

        postsAll.innerHTML += `
        
        <div class="weather">
            <div class="weather-name">${data.city.name}</div>
            <div class="weather-image">
                <picture>
                <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png">
                </picture>
            </div>
            <div class="weather-celcius">${Math.ceil(data.list[i].main.temp)}℃</div>
            <div class="weather-data">
                ${data.list[i].dt_txt}
            </div>
            <div class="weather-temp">
                <div class="temp-min">
                    Minimal: ${Math.ceil(data.list[i].main.temp_min)}℃
                </div>
                <div class="temp-max">
                    Maximal: ${Math.ceil(data.list[i].main.temp_max)}℃
                </div>
            </div>
            <div class="weather-wind">
                Wind: ${data.list[i].wind.speed}
            </div>
        </div>

        `
    }

    searchInput.value = ""

}
xhr.send()

})
