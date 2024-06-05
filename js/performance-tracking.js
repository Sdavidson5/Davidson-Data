const notesList = ['Hendricken Soccer'];

renderNotesList();

function renderNotesList(){
    let notesListHTML = '';

    for (let i = 0; i < notesList.length; i++) {
        const notes = notesList[i];
        const html = `<div>${notes}</div>`;
        notesListHTML += html;
    }

    document.getElementById('.js-notes-list')
        .innerHTML = notesListHTML;
}

function addToNotes(){
        const inputElement = document.getElementById('.input-notes');
        const note = inputElement.value;

        notesList.push(note);

        inputElement.value = '';

        renderNotesList();
}


