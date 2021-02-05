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
        
        eateryContainer.innerHTML = `<h2>Eatery</h2>${eateryListHTMLString}`
    })
}


// const eateryDetailsEventHub = document.querySelector("body")
// let eateryDetailListString = '';
// eateryDetailsEventHub.addEventListener("click", (eventObject) => {
//     if(eventObject.target.id === "eatery-details-button") {
//         console.log(eventObject.target.id)
//         // const eateryClicked = (eventObject.target.value)
//         const allTheEateries = useEateries()
//         console.log(eventObject.target.value)
//         const matchingEateries = allTheEateries.find((singleEateryInLoop) => {
//             return singleEateryInLoop.businessName === eventObject.target.value
//         })

//         eateryDetailListString += "";
//     }
//     document.querySelector(".eatery-details").innerHTML = `<h3>More Details:</h3>`
// })