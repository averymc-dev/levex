const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
