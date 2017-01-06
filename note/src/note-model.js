'use strict';

(function(exports) {

  function Note(text, id) {
    this._text = text;
    this._id = id;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  Note.prototype.returnId = function() {
    return this._id;
  };

  exports.Note = Note;

})(this);
