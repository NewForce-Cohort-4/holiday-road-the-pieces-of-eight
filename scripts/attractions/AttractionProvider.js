let attractions = []

export const useAttractions = () => {
    return attractions.slice()
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
        .then(response => response.json())
        .then(
            parsedAttractions => {
                //console.table(parsedAttractions) //check to see if printing to the console
                attractions = parsedAttractions
            }
        )
}