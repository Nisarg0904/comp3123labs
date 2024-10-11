
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  noteTitle: String,
  noteDescription: String,
  priority: {
    type: String,
    enum: ["HIGH", "LOW", "MEDIUM"],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
