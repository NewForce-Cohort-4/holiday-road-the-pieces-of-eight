import {useEateries, getEateries} from "./EateryProvider.js"
import {Eatery} from "./Eatery.js"


// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-eateries")

export const EaterySelect = () => {
    // Get all convictions from application state
    getEateries().then(() => {
    const eateriesArray = useEateries()
    render(eateriesArray)
    })
}

const render = (eateriesCollection) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="eaterySelect">
            <option value="0">Please select an eatery</option>
            ${
                eateriesCollection.map((currentEateryInLoop) => {
                    const eateryName = currentEateryInLoop.businessName
                    return `<option id="eaterySelect">${eateryName}</option>`
                })
            }
        </select>`
}

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", (eventObject) => {
    

    if(eventObject.target.id === "eaterySelect"){
        window.chosenEatery = eventObject.target.value
        console.log("This is the eatery that was selected: ", eventObject.target.value)

        EateryList(eventObject.target.value)
    }
})


let eateryContainer = document.querySelector(".eatery-preview")

export const EateryList = (optionSelected) => {
    getEateries().then(() => {
        let eateryToPrint = useEateries();

        
        for(const selection of eateryToPrint) {
            if(optionSelected === selection.businessName){
                eateryToPrint = eateryToPrint.filter(currentEateryInLoop => {
    
                    return currentEateryInLoop.businessName === optionSelected
                })
            } 
        }
        
        let eateryListHTMLString = ""
        for (const currentEateryInLoop of eateryToPrint) {
            eateryListHTMLString += Eatery(currentEateryInLoop)
        }
        
        eateryContainer.innerHTML = `${eateryListHTMLString}`
    })
}


// Prints details for eatery to the DOM when detail button is clicked
    document.querySelector("body").addEventListener("click", (eventObject) => {
        let eateryListString = "";

        if(eventObject.target.id === "eatery-details-button"){
            console.log("Hi")
            getEateries().then(() => {
                let allTheEateries = useEateries()
                
                 window.matchingEateries = allTheEateries.find((singleEateryInLoop) => {
                    return singleEateryInLoop.businessName === chosenEatery
            })

                document.querySelector(".eatery-details").innerHTML = `
                <div class="card eatery-details-card">
                <p class="card-text">${matchingEateries.description}</p>
                </div>`
            
            })   
        }
    })