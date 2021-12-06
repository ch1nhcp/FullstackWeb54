const mongoose = require("mongoose");

// Dinh nghia va khai bao schema
const PostSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, require: true },
    title: { type: String, require: true },
    description: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    createdBy: String,
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
