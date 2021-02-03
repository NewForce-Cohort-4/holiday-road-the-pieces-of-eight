let parks = []
let parkNames = []

 export const useParks = () => {
     return parks.slice()
 }
 export const useParkNames = () => {
     console.log(parkNames);
     return parkNames
 }

 export const getParks = () => {
    // Request the data
    return fetch("https://developer.nps.gov/api/v1/parks?limit=600&api_key=9wzNjNUr0KXvTztf6tOaT3XRKOVCcq0sPLZ3Im9x")
       // Convert the JSON string reposne to a Javascript data structure (object or array)
       .then(response => response.json())
       // Do something with the data
       .then(
           parsedParks => {
               parks = parsedParks.data
               
               parks.forEach(p => {
                   parkNames.push(p.fullName)
               })
               console.log(parkNames);
             //console.log(parks.data[0].fullName);
               
           })
}

