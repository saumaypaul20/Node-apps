

const fs = require('fs');

var fetchNotes = () =>{
    // if(fs.existsSync('./notes-data.json')){
    //     var noteString = fs.readFileSync('notes-data.json');
    //     notes = JSON.parse(noteString);
    // }
    //alternatively, use TRY-CATCH maethod:
    try{ 
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString); 
       }catch(e){   
        return [];
        }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    
    if(duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
    }
};

var getAll = () => {
   
      return  fetchNotes();
    
};

var readNotes = (title) => {
    console.log(`----------------------------`);
    console.log('Reading the Note', title);
    console.log(`----------------------------`);

    var notes = fetchNotes();
    var checkNoteTitle = notes.filter((note) => note.title === title);
    if(checkNoteTitle.length > 0){
        return checkNoteTitle[0].body;
    }
   
};

var removeNotes = (title) => {
    console.log(`----------------------------`);
    console.log('Removing the Note', title);
    console.log(`----------------------------`);

    var notes = fetchNotes();
    var checkNoteTitle = notes.filter((note) => note.title !== title);
    
    saveNotes(checkNoteTitle);
    return  notes.length !== checkNoteTitle.length;
            
};

module.exports = {
    addNote,
    getAll,
    readNotes,
    removeNotes
};


