const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
var comm = process.argv[2];
const argv = yargs
.command('add','Add New Command',{
         title:{
             describe:'Type Title',
             demand:'Title Required',
             alias:'t'
         },
    body:{
    describe:'Type Body Here',
        demand:'Body Required',
        alias:'b'
}
         })
.help()
.argv;
console.log('Command:', comm);
if (comm === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note Created');
        notes.logNotes(note);
    } else {
        console.log("Node Already Exist");
    }
} else if (comm === 'list') {
    var allnotes = notes.getAll();
    console.log(`Printing ${allnotes.length} notes`);
    allnotes.forEach((note) => notes.logNotes(note));
} else if (comm === 'read') {
    var note = notes.getfile(argv.title);
    if (note) {
        console.log('Note Found');
        notes.logNotes(note);
    } else {
        console.log("Note Not Found");
    }
} else if (comm === 'delete') {
    var removeNotes = notes.removefile(argv.title);
    var message = removeNotes ? 'Note Removed' : 'Note Not Found';
    console.log(message);
} else {
    console.log("Not Recognised");
}
