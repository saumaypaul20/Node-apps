const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command:', command);
//console.log('Process:', process.argv);
//console.log('Yargs:', argv);

if (command ==='add'){
   var note = notes.addNote(argv.title , argv.body);
   if(note){
        console.log('Successfully Crated');
        console.log(`Title: ${note.title}`);
       console.log(`Body: ${note.body}`);
   }else{
       console.log('WARNING: Already Created!');
       
   }
}else if(command === 'list'){
    var allNotes =  notes.getAll();
    console.log('------------');
    console.log(`Printing ${allNotes.length} note(s).`);
    
    allNotes.forEach((n) => {
        console.log('------------');
        console.log(`Title: ${n.title}`);
        console.log(`Body: ${n.body}`);
        console.log('------------');
    })
}
else if(command === 'read'){
    var bodyVal = notes.readNotes(argv.title);
    var msg = bodyVal ? bodyVal: 'No Matching Note found';
    console.log(msg);
    console.log('------------');
}
else if(command === 'remove'){
    var removed = notes.removeNotes(argv.title);
    var message = removed ? "Note Deleted" : "No matching Note found";
    console.log(message);
    console.log('------------');

}else{
    console.log('Command not recognised!');
} 