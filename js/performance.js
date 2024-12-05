document.querySelector('#notes-section-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  // Prevents newline in textarea
        const text = event.target.value;
        if (text.trim() !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = text;
            document.querySelector('#notes-section-list').appendChild(listItem);
            event.target.value = ''; // Clear textarea after adding
        }
    }
});