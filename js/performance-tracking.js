/*const notesList = ['Hendricken Soccer'];

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
}*/



/*for (let index = 0; index <=10; index +=2) {
    console.log(index);
}*/

const array=[1,2,3];
const num = 0;

function addNum(array,num) {
    for (let i= 0; i < array.length; i++) {
        const element = array[i]+num;
        
        console.log(element)
    }
    
}

addNum(array,5)


