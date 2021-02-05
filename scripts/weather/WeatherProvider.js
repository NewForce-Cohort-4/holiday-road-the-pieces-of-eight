import {settings} from '../Setting.js'
let weatherKey = settings.weatherKey

//unaltered return from weather api. 
let weatherDaily = []
let weather = []
let weatherCurrent = []

export const useDailyWeather = () => {
    return weatherDaily.slice()
}   
export const useCurrentWeather = () => {
    return weatherCurrent.slice()
}

 

//api fetch call
 export const getWeather = (latNum,longNum) => {
    // Request the data
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+latNum+'&'+'lon='+longNum+'&units=imperial&exclude=minutely,hourly,&appid='+APIkey)
       // Convert the JSON string reposne to a Javascript data structure (object or array)
       .then(response => response.json())
       // Do something with the data
       .then(
           parsedWeather => {
                weather = parsedWeather
                weatherDaily = weather.daily
                weatherCurrent = weather.current.weather
                console.log(weather.daily);
                //console.log(weatherCurrent);
            });
               
}

let APIkey = '360cacbe7a7d66806cb9469e969cd060'