const fs = require('fs');
let fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    var duplicate = notes.filter((note) => note.title === title);
    if (duplicate.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};
var getAll = () => {
    return fetchNotes();
}
var getfile = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}
var removefile = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}
var logNotes = (note) => {
    console.log("----");
    console.log(`Title: ${note.title},Body: ${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getfile,
    removefile,
    logNotes
};
