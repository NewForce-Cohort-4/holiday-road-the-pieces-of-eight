import {useParkNames, getParks} from "./ParkProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-parks")

export const ParkSelect = () => {
    // get all park names from application state
    getParks().then(() => {
    const parkNames = useParkNames()
    render(parkNames)
    })
}

export const render = (parksCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park</option>
            ${
                parksCollection.map((currentParkInLoop) => {
                    const parkName = currentParkInLoop
                    //console.log(parkName)
                    return `<option id="parkSelect">${parkName}</option>`
                })
            }
        </select>`
}

const eventHub = document.querySelector("body")
let printString = ''
eventHub.addEventListener("change", (eventObject) => {
    

    if(eventObject.target.id === "parkSelect"){
        printString = `"This is the park that was selected: ", ${eventObject.target.value}`
        document.querySelector(".park-preview").innerHTML.innerHTML=printString
        //parkList(eventObject.target.value)
    }
})

eventHub.addEventListener("change", (eventObject) => {
    
    if(eventObject.target.id === "parkSelect"){
        printString = `"This is the park that was selected: ", ${eventObject.target.value}`
        document.querySelector(".park-preview").innerHTML.innerHTML=printString
        //parkList(eventObject.target.value)
    }
})