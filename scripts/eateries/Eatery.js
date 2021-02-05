export function Eatery(eateryObject) {
    return `
    <div>
        <p>${eateryObject.businessName}</p>
        <button id="eatery-details-button" data-toggle="modal" data-target="myModal">Details</button>
    </div>`
}