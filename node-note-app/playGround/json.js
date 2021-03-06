/* var obj = {
    name: 'Mohammed'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj); */

/* var personString = '{"name": "Mohammed", "age": 35}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person); */

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some title'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log('The type of: ', typeof note);
console.log('The note title: ', note.title);