export function Eatery(eateryObject) {
    return `
    <div class="card">
        <h2 class="card-title text-center">Eatery</h2>
        <p class="card-text text-center">${eateryObject.businessName}</p>
        <button class="btn btn-secondary" id="eatery-details-button" data-toggle="modal" data-target="myModal">Details</button>
    </div>`
}