let parks = []

 export const useParks = () => {
     return parks.slice()
 }

 export const getParks = () => {
     // Request the data
     return fetch("https://developer.nps.gov/api/v1/parks?api_key=9wzNjNUr0KXvTztf6tOaT3XRKOVCcq0sPLZ3Im9x")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedParks => {
                parks = parsedParks
            }
        )
 }