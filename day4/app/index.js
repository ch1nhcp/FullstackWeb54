const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors()); //fix loi CORS

// config express đọc được input người dùng dạng json
// ko có dòng này req.body = undefined
app.use(express.json());

const postCRUD = require("./postCRUD");

//config viec truyen file tinh
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/hi", (req, res) => {
  res.send({ message: "hello" });
});

//Cach1: Lay tat ca bai posts
app.get("/get-all-posts", async (req, res) => {
  const allPosts = await postCRUD.getAllPosts();
  res.send({
    data: allPosts,
  });
});

//Cach 2: lay ra tat ca cac bai post
app.get("/posts", async (req, res) => {
  const allPosts = await postCRUD.getAllPosts();
  res.send({
    data: allPosts,
  });
});

//Cach1: Lay ra bai post co id cu the
app.get("/get-post", async (req, res) => {
  const foundPost = await postCRUD.getPost(1);

  //in ra thong tin bai post tim thay
  res.send({
    data: foundPost,
  });
});

//Cach2: Lay ra bai post co id cu the
app.get("/posts/:id", async (req, res) => {
  // path param
  const { id } = req.params;
  console.log(id);
  const foundPost = await postCRUD.getPost(String(id));
  res.send({
    data: foundPost,
  });
});

//Cach1: Tao bai post moi
app.get("/create-post", async (req, res) => {
  const dataPost = {
    imageUrl: "example.jpg",
    title: "example",
    description: "example",
    createdBy: "example@gmail.com",
  };
  const newPost = await postCRUD.createPost(dataPost);

  //in ra thong tin bai post moi
  res.send({
    data: newPost,
  });
});

//Cach2: Tao bai post moi su dung Postman
app.post("/posts", async (req, res) => {
  // để req.body có dữ liệu => express cần hiểu là người dùng dạng dữ liệu gì
  // tương đương với việc là google dịch hiểu người dùng dạng tiếng việt hay tiếng anh
  const dataPost = req.body;

  const newPost = await postCRUD.createPost(dataPost);
  res.send({
    data: newPost,
  });
});

//Cach1: Update bai post voi id va data cu the
app.get("/update-post", async (req, res) => {
  const dataUpdate = {
    imageUrl: "exampleeee.jpg",
    title: "exampleeee",
  };
  const updatePost = await postCRUD.updatePost(0, dataUpdate);

  //in ra thong tin bai post moi sau khi update
  res.send({
    data: updatePost,
  });
});

//Cach2: Update bai post voi id va data cu the
app.put("/posts/:postId", async (req, res) => {
  // input
  const { postId } = req.params;
  const dataUpdate = req.body;
  // process
  const updatePost = await postCRUD.updatePost(postId, dataUpdate);
  // output
  res.send({
    data: updatePost,
  });
});

//Cach1: Xoa bai post co id cu the
app.get("/delete-post", async (req, res) => {
  const deletePost = await postCRUD.deletePost(0);

  //in ra posts sau khi xoa post co id
  res.send({
    data: deletePost,
  });
});

//Cach2: Xoa bai post co id cu the
app.delete("/posts/:deletePostId", async (req, res) => {
  const { deletePostId } = req.params;
  const deleteStatus = await postCRUD.deletePost(id);
  res.send({
    data: deleteStatus,
  });
});

// rest api chỉ là conversation đặt tên

app.listen(8080, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Server started!");
});
