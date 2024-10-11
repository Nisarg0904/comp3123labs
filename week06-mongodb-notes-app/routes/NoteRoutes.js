const noteModel = require("../models/NotesModel");
const express = require("express");
const router = express.Router();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post("/notes", (req, res) => {
  if (!req.body.noteTitle || !req.body.noteDescription) {
    return res.status(400).send({
      message: "Note content cannot be empty",
    });
  }

  const note = new noteModel({
    noteTitle: req.body.noteTitle,
    noteDescription: req.body.noteDescription,
    priority: req.body.priority,
  });

  note
    .save()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Note.",
      })
    );
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get("/notes", (req, res) => {
  noteModel
    .find()
    .then((notes) => res.send(notes))
    .catch((err) =>
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      })
    );
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get("/notes/:noteId", (req, res) => {
  noteModel
    .findById(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Error retrieving note with id " + req.params.noteId,
      })
    );
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put("/notes/:noteId", (req, res) => {
  if (!req.body.noteTitle || !req.body.noteDescription) {
    return res.status(400).send({
      message: "Note content cannot be empty",
    });
  }

  noteModel
    .findByIdAndUpdate(
      req.params.noteId,
      {
        noteTitle: req.body.noteTitle,
        noteDescription: req.body.noteDescription,
        priority: req.body.priority,
        dateUpdated: Date.now(),
      },
      { new: true }
    )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Error updating note with id " + req.params.noteId,
      })
    );
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete("/notes/:noteId", (req, res) => {
  noteModel
    .findByIdAndRemove(req.params.noteId)
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "Note not found with id " + req.params.noteId,
        });
      }
      res.send({ message: "Note deleted successfully!" });
    })
    .catch((err) =>
      res.status(500).send({
        message:
          err.message || "Could not delete note with id " + req.params.noteId,
      })
    );
});
module.exports = router;
