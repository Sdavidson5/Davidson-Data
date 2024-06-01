const notes = [];

function addToNotes(){
    const inputElement = document.querySelector('.js-input-notes');
    console.log(inputElement);
    const note = inputElement.value;

    notes.push(note);
    console.log(notes)
}
