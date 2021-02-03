export function Eatery(eateryObject) {
    return `
    <div>
        <p>${eateryObject.businessName}</p>
        <button id="associates--${eateryObject.id}" data-toggle="modal" data-target="myModal">Details</button>
    </div>`
}