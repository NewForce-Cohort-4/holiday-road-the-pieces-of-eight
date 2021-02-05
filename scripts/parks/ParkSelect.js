import { getParks, useParks} from "./ParkProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters-parks")

export const ParkSelect = () => {
    // fetch call and then return array of objects that represent parks
    getParks().then(() => {
        let parkArr = useParks()
        //create array to hold only names.Used in render()as argument,  to populate dropdown List
        let parkNameArr = []
            parkArr.forEach(element => {
            parkNameArr.push(element.fullName)
    });
     
    render(parkNameArr)
    
    })
}
//function renders dropdown by iterating through each name and adding html string in order to create <options>(ind dropdown selections)
export const render = (parkNameArray) => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park</option>
            ${
                parkNameArray.map((currentParkInLoop) => {
                    const parkName = currentParkInLoop
                    //console.log(parkName)
                    return `<option id="parkSelect">${parkName}</option>`
                })
            }
        </select>`
}
//event listener listens to body for a change. If change coocurs checks which element is triggered on line 41
// if value is 0 (default choice) clear screen. If value !0: print value to screen, create a button, add value to global variable(window)
// to allow access in another eventhandler (details button)
const eventHub = document.querySelector("body")
let printString = ''
eventHub.addEventListener("change", (eventObject) => {
    let chosenPark = ''  

    if(eventObject.target.id === "parkSelect"){
        if(eventObject.target.value == 0){
            document.querySelector(".park-preview").innerHTML=' '
        }else{
        printString = `This is the park that was selected:${eventObject.target.value}
        <div>
        <button id="park-detail">More Details</button>
         </div>  
         `
        document.querySelector(".park-preview").innerHTML=printString
        window.chosenPark = eventObject.target.value
        }
    }
})
//listening for click on body. if clicked && == details button, get the name of the selected park with chosenPark. grab complete set of parks data, itereate until finding an object with the same name as the one selected in dropwdown
eventHub.addEventListener("click", (eventObject) => {
        let parkDetailString = ''
        if (eventObject.target.id==='park-detail'){
            getParks().then(() => {
                let parkArr = useParks()
                let result = parkArr.find(obj => {
                    return obj.fullName == chosenPark
                  })
                parkDetailString = `${result.description}Learn more at ${result.url}`
                document.querySelector('.park-details').innerHTML= parkDetailString
            })
        }
        document.querySelector('.park-details').innerHTML= chosenPark
        })      

