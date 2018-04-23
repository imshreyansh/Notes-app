const fs=require('fs');
var originalnote={
    title:"some title",
    body:"some body"
};
var originalnotestring=JSON.stringify(originalnote);
fs.writeFileSync("notes.json",originalnotestring);
var notestring=fs.readFileSync("notes.json");
var note=JSON.parse(notestring);
console.log(typeof note);
console.log(note.title);
