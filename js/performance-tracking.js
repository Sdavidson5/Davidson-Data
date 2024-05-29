
function notesCollection() {
    const inputElement = document.getElementsByClassName('input-notes-js');
    const inputValue = inputElement.value;
    let notes = [`${inputValue}`];

    for (let index = 0; index < notes.length; index++) {
        const element = notes[index];
        const html = `<p>${notes}</p>`;
        }
}