console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log(`Command: ${command}`);
console.log(process.argv);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all note');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('command not recognised');
}