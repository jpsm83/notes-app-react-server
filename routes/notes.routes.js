// .populate in notes.routes are causing error in the front end
// Objects are not valid as a React child
// .populate in auth.routes are working fine
// why??? only god knows...

const express = require("express");
const Note = require("../models/Note.model");
const User = require("../models/User.model");
const router = express.Router();

router.get("/", (req, res, next) => {
  // get the personal notes
  Note.find({})
  // .populate("user", "username")
    .then((notes) => res.status(200).json(notes))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  // get an especific note
  Note.findOne({ _id: id })
  // .populate("user", "username")
    .then((note) => res.status(200).json(note))
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res, next) => {
  const {
    dueDate,
    title,
    description,
  } = req.body;
  if (!req.body) {
    // error code 400 - bad request
    return res.status(400).json({ message: "All fields are required" });
  }

  Note.create({
    dueDate,
    title,
    description,
    priority,
    done,
    user: req.user.id,
  })
    .then((note) => {
      const userId = req.user.id;
      User.findOneAndUpdate(
        { _id: userId },
        { $push: { myNotes: note.id } },
        { new: true }
      )
        .then((updateUser) => {
          res.status(200).json(updateUser);
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  // find a note and let only the owner of it update it using req.user.id
  Note.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  })
    .then((note) => res.status(200).json(note))
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  // find a note and let only the owner of it delete it using req.user.id
  Note.findOneAndRemove({ _id: id })
    .then(() => {
      const userId = req.user.id;
      User.findOneAndUpdate(
        { _id: userId },
        { $pull: { myNotes: id } },
        { new: true }
      )
        .then((updateUser) => {
          res.status(200).json(updateUser);
        })
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
