
import {settings} from '../Setting.js'
let npsKey = settings.npsKey

//unaltered return froom nps api. An object that includes an array of objects
let parks = []

//peeled away first layer to get array of objects
let parksArr = []
 export const useParks = () => {
     return parksArr.slice()
 }

//api fetch call
 export const getParks = () => {
    // Request the data
    return fetch("https://developer.nps.gov/api/v1/parks?limit=600&api_key="+ npsKey)
       // Convert the JSON string reposne to a Javascript data structure (object or array)
       .then(response => response.json())
       // Do something with the data
       .then(
           parsedParks => {
                parks = parsedParks
                //console.log(parks.data[0].latLong);
                //console.log(parks.data[0]);
                parks.data.forEach(element => {
                   parksArr.push(element);
               });
               
               
            });
               
           }


