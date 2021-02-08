  
// Function that builts and returns an HTML component representing a single note
// (Remember that fat arrow functions without curly braces automatically return?)
export const Saved = saveObject => `
    <div>
        <p><h4>Itinarary List</h4>${saveObject.text}</p>
    </div>
`