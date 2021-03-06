import { getAttractions, useAttractions } from "./AttractionProvider.js"

//import { Attractions } from "./Attractions.js"

const contentTarget = document.querySelector(".filter_attraction")
// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector("body")

export const attractionName = () => {
        getAttractions().then(() => {
        const allAttractions = useAttractions()
        //console.log(allAttractions);
        render(allAttractions)        
    });
};

const render = attractionCollection => {

    contentTarget.innerHTML = `
    <select class='dropdown' id='attractionSelect'>
        <option value="0">Please select an attraction...</option>
            ${attractionCollection.map(attractionObject => {
                const attraction = attractionObject.name
                return `<option id='attractionSelect'>${attraction}</option>
        `
     }).join("")//changes array to string
    }
    </select>
    `}

let printString = ""
eventHub.addEventListener("change", (eventObject) => {
    //console.log("You clicked somewhere in the main container")
    
    // To be more specific, we need to know specifically what we clicked on
    // console.log("Here is the element you clicked on: ", eventObject.target)
 
    if(eventObject.target.id === "attractionSelect"){
        window.chosenAttraction = eventObject.target.value
        // console.log("You selected something from the attraction dropdown")
        // console.log("This is the attraction selected: ", eventObject.target.value);
    printString =  `
    <div class="card">
    <h2 class="card-title text-center">Bizarrary</h2>
    <p class="card-text text-center">${eventObject.target.value}</p>
    <button class="btn btn-secondary" id="attraction-details-button">Details</button>`

 let locationContainer = document.querySelector(".attraction-preview") 

 locationContainer.innerHTML = printString


}
})

//only run if specific id is clicked 