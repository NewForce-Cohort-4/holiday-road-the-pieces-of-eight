import {getSaves, useSaves} from "./ItinararyDataProvider.js"
import { Saved } from "./Itinarary.js"

export function SaveList(){
    getSaves()
    .then(() => {
        const allTheSaves = useSaves()

        // This is an element we added!
        const contentTarget = document.querySelector(".savedFormContainer")

        // This does the same thing as printing with a for loop! We just use a .map() to loop over our collection and call the Note function instead of a for loop
        
        contentTarget.innerHTML = allTheSaves.map(singleSave => Saved(singleSave))
    })
}