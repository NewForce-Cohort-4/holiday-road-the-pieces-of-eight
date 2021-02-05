import {useEateries} from "./EateryProvider.js"



// export const EateryDetailList = (id) => {
//         getEateries().then(() => {

// const eateryEventHub = document.querySelector("body")

// eateryEventHub.addEventListener("click", (idObject) => {

//     if(idObject.target.id === "eatery-details-button"){
//         console.log(idObject.target.id)
//         const idOfEateryClicked = idObject.target.id
//         const allTheEateries = useEateries()

//         const matchingEateries = allTheEateries.find((singleEateryInLoop) => {
//             return singleEateryInLoop.id === +idOfEateryClicked
//         })

//         for (let i = 0; i < matchingEateries.length; i++) {
//             document.querySelector(".eatery-details").innerHTML += `
//             <div class="eatery-details col-md-6">
//                 <p>Description: ${matchingEateries.known_associates[i].name}</p>
//                 <p>Alibi: ${matchingEateries.known_associates[i].alibi}</p>
//             </div>`
//         } 
//     }
// })
// })
// }

// const eventHub = document.querySelector(".itenerary-preview-container")
// let eateryDetailListString = '';
// eventHub.addEventListener("click", (eventObject) => {
//     if(eventObject.target.id === "eatery-details") {
//         console.log("hi")

//         eateryDetailListString += "sud";
//     }
//     document.querySelector(".eatery-details").innerHTML = "put it here"
// })



const eateryDetailsEventHub = document.querySelector("body")
let eateryDetailListString = '';
eateryDetailsEventHub.addEventListener("click", (eventObject) => {
    if(eventObject.target.id === "eatery-details-button") {
        console.log(eventObject.target.value)
        // const eateryClicked = (eventObject.target.value)
        const allTheEateries = useEateries()
        console.log(eventObject.target.value)
        const matchingEateries = allTheEateries.find((singleEateryInLoop) => {
            return singleEateryInLoop.businessName === eventObject.target.value
        })
        console.log("Description:", matchingEateries.description)

        eateryDetailListString += "";
        
    }
    document.querySelector(".eatery-details").innerHTML = `<h3>More Details:</h3>`
})