import { useAttractions } from "./AttractionProvider"

document.querySelector("body").addEventListener("click", (EventObject) => {
    console.log("you clicked me")
    console.log(EventObject.target.id)
    if(EventObject.target.id.includes("attractions--")){
        const idOfAttractionClicked = (EventObject.target.id.split("--").pop())
        const allTheAttractions = useAttractions()
        
        const matchingAttraction = allTheAttractions.find((singleAttractionInLoop) => {
            return singleAttractionInLoop.id === +idOfAttractionClicked
        })
        console.log("matching attractions", matchingAttractions.description)


        document.querySelector(".attraction-button-container").innerHTML = ""
        
        for(let i = 0; i <matchingattractions.description.length; i++)
            document.querySelector(".attractions-button-container").innerHTML += `
            <p><h5>Description:</h5>${matchingAttractions.description}</p>
            `
    }
})