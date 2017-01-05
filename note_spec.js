function testAddingNewNote() {
  var note = new Note("Text");
  assert.isTrue(note.text === "Text");
};

testAddingNewNote("Text");

function testListingAllNotes() {
  var note = { text: "This is a note on Tuesday" }
  var noteList = new NoteList();
  noteList.addNoteToList(note);
  assert.isTrue(noteList.list[0] === note);
};

testListingAllNotes("This is a note on Tuesday");

function testNoNotesDisplayed() {
  var listHTML = new ListHTML({ list: [] });
  assert.isTrue(listHTML.view() === "<ul></ul>")
};

testNoNotesDisplayed();

function testOneNoteDisplayed() {
  var noteList = { list: [{ text: "This is a note on Tuesday" }]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === "<ul><li>This is a note on Tuesday</li></ul>")
};

testOneNoteDisplayed();

function testMultipleNotesDisplayed(){
  var noteList = { list: [{text: "This is a note"}, {text: "Another note"}]};
  var listHTML = new ListHTML(noteList);
  assert.isTrue(listHTML.view() === "<ul><li>This is a note</li><li>Another note</li></ul>")
};

testMultipleNotesDisplayed();

function testCreatingNoteList() {
  var note = { text: "Favourite drink: seltzer" }
  var noteController = new NoteController();
  noteController.addNewNote(note)
  if (noteController.noteList.list[0].text !== "Favourite drink: seltzer") {
    throw new Error("Does not contain note list")
  }
};

testCreatingNoteList();

function testNoteIsAddedToList() {
  var noteController = new NoteController();
  noteController.addNewNote();
  assert.isTrue(noteController.noteList.list.length === 1)
};

testNoteIsAddedToList();

function testDisplayNoteList() {
  var noteController = new NoteController();
  noteController.addNewNote()
  noteController.displayNotes()
  if(noteController.listHTML.view() !== "<ul><li>Favourite drink: seltzer</li></ul>") {
    throw new Error("No list created")
  }
};

testDisplayNoteList();

function testSingleNoteView() {
  var noteList = { list: [{ text: "This is a note on Tuesday" }]};
  var singleNote = new SingleNote();
  if(singleNote.displayNote() !== "<ul><li>Favourite drink: seltzer</li></ul>") {
    throw new Error("No list created")
  }
  be taken to a page where the full note is
  expect that page to have the full note text
};

testSingleNoteView();
