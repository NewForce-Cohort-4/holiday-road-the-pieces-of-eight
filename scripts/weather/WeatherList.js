import {getWeather, useCurrentWeather, useDailyWeather} from './WeatherProvider.js'

const weatherHtmlTarget = document.querySelector(".weather-container")

export const weatherPrinter = () => {
    // fetch call and then return array of objects that represent parks
    getWeather().then(() => {
        let weatherString=''
        const dailyWeatherArr = useDailyWeather()
        let it = {}
        for(let i=0; i<5; i++){
        
         it[i] = {
            date: new Date(dailyWeatherArr[i].dt*1000),
            high: dailyWeatherArr[i].temp.max,
            low: dailyWeatherArr[i].temp.min,
            forecast: dailyWeatherArr[i].weather[0].description,
            
        } 
          console.log(it);
        }
    
    })
    

}

























