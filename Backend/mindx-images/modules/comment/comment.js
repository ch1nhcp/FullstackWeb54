const mongoose = require("mongoose");

// Dinh nghia va khai bao schema
const CommentSchema = new mongoose.Schema(
  {
    content: { type: String, require: true },
    postId: { type: mongoose.Types.ObjectId, require: true },
    createdBy: String,
  },
  {
    timestamps: true,
  }
);

const CommentModel = mongoose.model("Comment", CommentSchema);

module.exports = CommentModel;
