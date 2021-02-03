let eateries = []

export const useEateries = () => {
    return eateries.slice()
}

 export const getEateries = () => {
     // Request the data
     return fetch("http://holidayroad.nss.team/eateries")
        // Convert the JSON string reposne to a Javascript data structure (object or array)
        .then(response => response.json())
        // Do something with the data
        .then(
            parsedEateries => {
                eateries = parsedEateries
            }
        )
 }
