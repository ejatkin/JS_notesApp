'use strict';

function testNewNoteCreated() {
  var note = new Note('hi!');
  console.log("TEST: testNewNoteCreated")
  assert.isTrue(note.readNote() === 'hi!')
};

function testNewNoteIdCreated() {
  var note = new Note("text of note", 0);
  console.log("TEST: testNewNoteIdCreated")
  assert.isTrue(note.returnId() === 0)
};

testNewNoteCreated();
testNewNoteIdCreated();
