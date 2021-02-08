import {getWeather, useCurrentWeather, useDailyWeather} from './WeatherProvider.js'

const weatherHtmlTarget = document.querySelector(".weather-container")

export const weatherPrinter = (latLong) => {
    // fetch call and then return array of objects that represent parks
    let long = latLong.split(' ').pop()
    let lat = latLong.split(', ').shift()
    let longNum = long.split(':').pop()
    let latNum = lat.split(':').pop()
    
    console.log(lat);
    console.log(longNum);
    getWeather(latNum, longNum).then(() => {
        let weatherString=''
        const dailyWeatherArr = useDailyWeather()
        let it = {}
        for(let i=0; i<5; i++){
        
         it[i] = {
            date: new Date(dailyWeatherArr[i].dt*1000).toString().slice(0,3),
            high: dailyWeatherArr[i].temp.max,
            low: dailyWeatherArr[i].temp.min,
            forecast: dailyWeatherArr[i].weather[0].description,
            icon: dailyWeatherArr[i].weather[0].icon,
        } 
          
        }
        
        for(let i=0; i<5;i++){
            console.log(it[i]);
            weatherString +=`
            <div class='day col-sm-2 card'>
                <div class="card-body">
                    <h5 class="card-title">${it[i].date}</h5>
                    <div class="card-text">High: ${it[i].high}</div>
                    <div class="card-text">Low: ${it[i].low}</div>
                    <div class="card-text">Forecast : ${it[i].forecast}</div>
                    <img class="weather-img" src="http://openweathermap.org/img/wn/${it[i].icon}@2x.png">
                </div>
            </div>
            <br>
            `
        }
        weatherHtmlTarget.innerHTML = weatherString
    })
    

}

























