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
            date: new Date(dailyWeatherArr[i].dt*1000),
            high: dailyWeatherArr[i].temp.max,
            low: dailyWeatherArr[i].temp.min,
            forecast: dailyWeatherArr[i].weather[0].description,
            icon: dailyWeatherArr[i].weather[0].icon,
        } 
          
        }
        
        for(let i=0; i<5;i++){
            console.log(it[i]);
            weatherString +=`
            <div class='day'>
                <div>${it[i].date}</div>
                <div>High: ${it[i].high}</div>
                <div>Low: ${it[i].low}</div>
                <div>Forecast : ${it[i].forecast}</div>
                <div>${it[i].icon}</div>
            </div>
            <br>
            `
        }
        weatherHtmlTarget.innerHTML = weatherString
    })
    

}

























