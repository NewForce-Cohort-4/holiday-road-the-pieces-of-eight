const saves = []

export const useSaves = () => saves.slice()



export const getSaves = () => {
    return fetch('http://localhost:5505/posts')
        .then(response => response.json())
        .then(parsedSaves => {
            saves = parsedSaves
        })

}

export const saveIt = save => {
    debugger
    return fetch('http://localhost:5505/posts', {
        method: "POST", //modify the API state on a fetch
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
    })
    .then(getSaves) // After we add a note, get them all again so our new note appears in our collection
}