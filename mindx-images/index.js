//Khai bao cac thu vien duoc su dung
const express = require("express");
const mongoose = require("mongoose");

const PostRouter = require("./modules/post");
const CommentRouter = require("./modules/comment");

async function main() {
  //Dung JS de ket noi toi MongoDB
  await mongoose.connect("mongodb://localhost:27017/mindx-demo");
  console.log("MongoDB connected!");

  const app = express();
  
  app.use(express.json());

  app.use("api/posts", PostRouter);
  app.use("api/comments", CommentRouter);

  // // Get all post
  // app.get("/api/posts", async (req, res) => {
  //   try {
  //     const posts = await PostModel.find();
  //     //Tra ve ket qua
  //     res.send({
  //       success: 1,
  //       data: posts,
  //     });
  //   } catch (err) {
  //     //Tra ve trang thai loi
  //     res.status(400).send({
  //       success: 0,
  //       data: null,
  //       message: err.message || "Something went wrong",
  //     });
  //   }
  // });
  // // Get specified post
  // app.get("/api/posts/:postId", async (req, res) => {
  //   try {
  //     const { postId } = req.params;
  //     const foundPost = await PostModel.findById(postId);
  //     // const foundPost = await PostModel.findOne({ _id: postId });

  //     //Tra ve ket qua
  //     res.send({
  //       success: 1,
  //       data: foundPost,
  //     });
  //   } catch (err) {
  //     //Tra ve trang thai loi
  //     res.status(400).send({
  //       success: 0,
  //       data: null,
  //       message: err.message || "Something went wrong",
  //     });
  //   }
  // });

  // // Create new post
  // app.post("/api/posts/", async (req, res) => {
  //   try {
  //     const newPostData = req.body;
  //     const newPost = await PostModel.create(newPostData);

  //     //Tra ve ket qua
  //     res.send({
  //       success: 1,
  //       data: newPost,
  //     });
  //   } catch (err) {
  //     //Tra ve trang thai loi
  //     res.status(400).send({
  //       success: 0,
  //       data: null,
  //       message: err.message || "Something went wrong",
  //     });
  //   }
  // });

  // // Update specified post
  // app.put("/api/posts/:postId", async (req, res) => {
  //   try {
  //     const { postId } = req.params;
  //     const updatedPostData = req.body;
  //     const updatedPost = await PostModel.findByIdAndUpdate(
  //       postId,
  //       updatedPostData,
  //       { new: true } // de tra ve ket qua moi trong postman
  //     );

  //     //Tra ve ket qua
  //     res.send({
  //       success: 1,
  //       data: updatedPost,
  //     });
  //   } catch (err) {
  //     //Tra ve trang thai loi
  //     res.status(400).send({
  //       success: 0,
  //       data: null,
  //       message: err.message || "Something went wrong",
  //     });
  //   }
  // });

  // // Delete specified post
  // app.delete("/api/posts/:postId", async (req, res) => {
  //   try {
  //     const { postId } = req.params;
  //     const deletePost = await PostModel.findByIdAndDelete(postId);

  //     //Tra ve ket qua
  //     res.send({
  //       success: 1,
  //       data: deletePost,
  //     });
  //   } catch (err) {
  //     //Tra ve trang thai loi
  //     res.status(400).send({
  //       success: 0,
  //       data: null,
  //       message: err.message || "Something went wrong",
  //     });
  //   }
  // });

  //Khai bao cong de su dung expressJS
  app.listen(9000, (err) => {
    if (err) throw err;
    console.log("Server connected!");
  });
}

main();
