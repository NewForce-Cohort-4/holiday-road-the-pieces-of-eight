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
 export const getWeather = () => {
    // Request the data
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&'+'lon='+lon+'&units=imperial&exclude=minutely,hourly,&appid='+APIkey)
       // Convert the JSON string reposne to a Javascript data structure (object or array)
       .then(response => response.json())
       // Do something with the data
       .then(
           parsedWeather => {
                weather = parsedWeather
                weatherDaily = weather.daily
                weatherCurrent = weather.current.weather
                //console.log(weatherCurrent);
            });
               
}




        //    https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        //    https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}
        //https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&-94.037689&exclude=minutely,hourly,&appid=360cacbe7a7d66806cb9469e969cd060 

        let lat = 33.441792
        let lon = -94.037689
        let APIkey = '360cacbe7a7d66806cb9469e969cd060'