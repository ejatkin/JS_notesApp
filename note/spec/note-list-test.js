'use strict';

function testNewListCreated() {
  var list = new NoteList();
  console.log("TEST: testNewListCreated")
  assert.isTrue( list.seeList() instanceof Array )
};

function testNoteIsInList() {
  var list = new NoteList();
  var note = new Note('yo');
  list.addNote(note);
  console.log("TEST: testNoteListIsInList")
  assert.isTrue(list.seeList().length === 1)
};

function testNoteInListHasId() {
  var list = new NoteList();
  list.addNote("this is a note");
  console.log("TEST: testNoteInListHasId")
  assert.isTrue(list.seeList()[0].returnId() === 0)
};

testNewListCreated();
testNoteIsInList();
testNoteInListHasId();
