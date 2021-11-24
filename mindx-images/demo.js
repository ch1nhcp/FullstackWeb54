const mongoose = require("mongoose");

/**
 * postSchema { id, description, .... }
 */

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

async function main() {
  //Dung JS de ket noi toi MongoDB
  await mongoose.connect("mongodb://localhost:27017/mindx-demo");
  console.log("MongoDB connected successfully!"); // thong bao neu connect thanh cong!

  const newPost = {
    title: "Hello",
    description: "hihihihi",
    createdBy: "superbro",
    imageUrl: "http://localhost:27017/",
  };
  // await PostModel.create(newPost);
  const posts = await PostModel.find();
  console.log(posts);
}

main();
