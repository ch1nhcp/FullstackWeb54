//Khai bao cac thu vien duoc su dung
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const PostRouter = require("./modules/post");
const CommentRouter = require("./modules/comment");
const AuthRouter = require("./modules/auth");

async function main() {
  //Dung JS de ket noi toi MongoDB
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(process.env.MONGODB_URI);
  console.log(process.env.PORT);
  console.log("MongoDB connected!");

  const app = express();

  app.use(express.json());


  // Chú ý phần đường dẫn cần có /
  app.use("/api/posts", PostRouter);
  app.use("/api/comments", CommentRouter);
  app.use("/api/auth", AuthRouter);

  app.listen(9000, (err) => {
    if (err) throw err;
    console.log("Server connected!");
  });
}

main();
