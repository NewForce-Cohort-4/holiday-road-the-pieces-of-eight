import { saveIt } from "./ItinararyDataProvider.js"
//import {SaveList} from "./ItinararyList.js"

const contentTarget = document.querySelector(".savedFormContainer")

const eventHub = document.querySelector("body")

export const ListForm = () => {
    contentTarget.innerHTML = `

    <input type="date" id = "note-date"></input>
    <br>
    <input type="text" id = "note-text"></input>
    <br>
    <button id="saveNote">Save Itinerary</button>
    </div>
    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveIt") {
        console.log("You clicked the save button")

        // Make a new object representation of a note
        const newSave = {
            attractions: "",
            parks: "",
            eateries: "",
        }// Key/value pairs here
        console.log(newSave)
        console.log(Object.values(newSave))
        // Change API state and application state
        saveIt(newSave)
        .then(SaveList) // Refresh your list of notes once you've saved your new one
    }
    //console.log(clickEvent.target.id)
})
