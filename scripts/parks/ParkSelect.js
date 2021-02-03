import {useParks, getParks} from "./ParkProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-park")

export const ParkSelect = () => {
    // Get all convictions from application state
    getParks().then(() => {
    const parksArray = useParks()
    render(parksArray)
    })
}

const render = (parksCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park</option>
            ${
                parksCollection.map((currentParkInLoop) => {
                    const parkName = currentParkInLoop.data.fullName
                    console.log(parkName)
                    return `<option id="parkSelect">${parkName}</option>`
                })
            }
        </select>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {
    

    if(eventObject.target.id === "parkSelect"){
        console.log("This is the park that was selected: ", eventObject.target.value)

        CriminalList(eventObject.target.value)
    }
})