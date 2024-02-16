window.onload = function() {
    loadNotes();
};

function saveNote() {
    var text = document.getElementById('text').value;
    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
    document.getElementById('text').value = ''; 
}

function displayNotes() {
    var notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = ''; 

    var notes = JSON.parse(localStorage.getItem('notes')) || [];
    for (var i = 0; i < notes.length; i++) {
        var noteElement = document.createElement('li');
        noteElement.textContent = notes[i];
        notesContainer.appendChild(noteElement);
    }
}

function loadNotes() {
    if(localStorage.getItem('notes')) {
        displayNotes();
    }
}
