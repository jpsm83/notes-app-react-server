// mongoose is a mongodb library that help to create models easyer and faster
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    dueDate: {
      type: Date, default: Date.now()
    },
    title: {
      type: String,
      required: [true, "Please add a title"],
      unique: true,
      trim: true,
      maxlength: [40, "Title cannot be more than 40 characters"],
    },
    description: {
      type: String,
      required: true,
      maxlength: [200, "Description cannot be more than 200 characters"],
    },
    priority: {
      type: Boolean, default: false
    },
    done: {
      type: Boolean, default: false
    },
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;

        return ret;
      },
    },
  }
);

const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
