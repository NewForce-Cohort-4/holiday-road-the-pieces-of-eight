import {getWeather, useCurrentWeather, useDailyWeather} from './WeatherProvider.js'

const weatherHtmlTarget = document.querySelector(".weather-container")

export const weatherPrinter = () => {
    // fetch call and then return array of objects that represent parks
    getWeather().then(() => {
        const dailyWeatherArr = useDailyWeather()
        
        for(let i=0; i<4; i++){

        let it = {
            date: new Date(dailyWeatherArr[i].dt*1000),
            high: dailyWeatherArr[i].temp.max,
            low: dailyWeatherArr[i].temp.min,
            forecast: dailyWeatherArr[i].weather[0].description,
        }
        console.log(it);
       }  
    })
}




























