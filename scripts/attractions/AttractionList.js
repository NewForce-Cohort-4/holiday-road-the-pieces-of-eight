import { getAttractions, useAttractions } from "./AttractionProvider.js";


document.querySelector("body").addEventListener("click", (EventObject) => {
    let detailListString = "";
    //console.log("you clicked me")
    //console.log(EventObject.target.id)
    if(EventObject.target.id === "attractionSelect"){
        getAttractions().then(() => {
            let allTheAttractions = useAttractions()
            
            //console.log(EventObject.target.value)
            
             window.matchingAttraction = allTheAttractions.find((singleAttractionInLoop) => {
                return singleAttractionInLoop.name === EventObject.target.value
        })

        console.log("Description", matchingAttraction.description)

        //detailListString = `${matchingAttraction.description}`
        
        })
    }
    
    document.querySelector(".attraction-details").innerHTML = `${matchingAttraction.description}`
    console.log("Description", matchingAttraction.description)
    // detailListString += attractionSelect.description;
})