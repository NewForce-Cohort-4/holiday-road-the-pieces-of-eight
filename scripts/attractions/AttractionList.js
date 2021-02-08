import { getAttractions, useAttractions } from "./AttractionProvider.js";


document.querySelector("body").addEventListener("click", (EventObject) => {
    let detailListString = "";
    //console.log("you clicked me")
    //console.log(EventObject.target.id)
    if(EventObject.target.id === "attraction-details-button"){
        //window.chosenAttraction = EventObject.target.value
        getAttractions().then(() => {
            let allTheAttractions = useAttractions()
            
            //console.log(EventObject.target.value)
            
             window.matchingAttraction = allTheAttractions.find((singleAttractionInLoop) => {
                return singleAttractionInLoop.name === chosenAttraction
        })
        //console.log("Description", matchingAttraction.description)
        //detailListString = `${matchingAttraction.description}`
        document.querySelector(".attraction-details").innerHTML = `
        <div class="card location-details-card">
        <p class="card-text">${matchingAttraction.description}</p>
        </div>`
    })
        //document.querySelector(".attraction-details").innerHTML = `<h4></h4>${matchingAttraction.description}`
    }
    
    // //document.querySelector(".attraction-details").innerHTML = `
    // <div class="card location-details-card">
    // <p class="card-text">${matchingAttraction.description}</p>
    // </div>`
    // //onsole.log("Description", matchingAttraction.description)
    // // detailListString += attractionSelect.description;
})