
const yargs = require('yargs');

const notes = require('./notes');


// Customize yargs version
yargs.version('1.1.0');

//add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove command
yargs.command({
  command: 'remove',
  describe: 'Remove  note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler(argv) {
    notes.listNotes(argv.title);
  },
});

//read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
      }
    },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

// add, remove, read, list
// console.log(yargs.argv);
yargs.parse();
