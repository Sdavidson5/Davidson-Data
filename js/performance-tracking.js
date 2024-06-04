const notesList = ['Hendricken Soccer is the best'];

renderNotesList();

function renderNotesList(){
    let notesListHTML = '';

    for (let i = 0; i < notesList.length; i++) {
        const notes = notesList[i];
        const html = `<p>${notes}</p>`;
        notesListHTML += html;
    }
    console.log(notesListHTML);

    document.querySelector(`.js-notes-list`).
        innerHTML = notesListHTML;

}
function addToNotes(){
        const inputElement = document.querySelector(`.input-notes`);
        const note = inputElement.value;

        notesList.push(note);
        console.log(notesList);

        inputElement.value = ``;

        renderNotesList();
}


