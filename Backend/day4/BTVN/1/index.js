const express = require("express");
const path = require("path");
const app = express();

// config express đọc được input người dùng dạng json
// ko có dòng này req.body = undefined
app.use(express.json());

const commentCRUD = require("./commentCRUD");

//Cach1: Lay tat ca comments
app.get("/get-all-comments", async (req, res) => {
  const allcomments = await commentCRUD.getAllcomments();
  res.send({
    data: allcomments,
  });
});

//Cach 2: lay ra tat ca cac comment
app.get("/comments", async (req, res) => {
  const allcomments = await commentCRUD.getAllcomments();
  res.send({
    data: allcomments,
  });
});

//Cach1: Lay ra comment co id cu the
app.get("/get-comment", async (req, res) => {
  const foundcomment = await commentCRUD.getcomment(1);

  //in ra thong tin comment tim thay
  res.send({
    data: foundcomment,
  });
});

//Cach2: Lay ra comment co id cu the
app.get("/comments/:id", async (req, res) => {
  // path param
  const { id } = req.params;
  console.log(id);
  const foundcomment = await commentCRUD.getcomment(String(id));
  res.send({
    data: foundcomment,
  });
});

//Cach1: Tao comment moi
app.get("/create-comment", async (req, res) => {
  const datacomment = {
    imageUrl: "example.jpg",
    title: "example",
    description: "example",
    createdBy: "example@gmail.com",
  };
  const newcomment = await commentCRUD.createcomment(datacomment);

  //in ra thong tin comment moi
  res.send({
    data: newcomment,
  });
});

//Cach2: Tao comment moi su dung commentman
app.comment("/comments", async (req, res) => {
  // để req.body có dữ liệu => express cần hiểu là người dùng dạng dữ liệu gì
  // tương đương với việc là google dịch hiểu người dùng dạng tiếng việt hay tiếng anh
  const datacomment = req.body;

  const newcomment = await commentCRUD.createcomment(datacomment);
  res.send({
    data: newcomment,
  });
});

//Cach1: Update comment voi id va data cu the
app.get("/update-comment", async (req, res) => {
  const dataUpdate = {
    imageUrl: "exampleeee.jpg",
    title: "exampleeee",
  };
  const updatecomment = await commentCRUD.updatecomment(0, dataUpdate);

  //in ra thong tin comment moi sau khi update
  res.send({
    data: updatecomment,
  });
});

//Cach2: Update comment voi id va data cu the
app.put("/comments/:commentId", async (req, res) => {
  // input
  const { commentId } = req.params;
  const dataUpdate = req.body;
  // process
  const updatecomment = await commentCRUD.updatecomment(commentId, dataUpdate);
  // output
  res.send({
    data: updatecomment,
  });
});

//Cach1: Xoa comment co id cu the
app.get("/delete-comment", async (req, res) => {
  const deletecomment = await commentCRUD.deletecomment(0);

  //in ra comments sau khi xoa comment co id
  res.send({
    data: deletecomment,
  });
});

//Cach2: Xoa comment co id cu the
app.delete("/comments/:deletecommentId", async (req, res) => {
  const { deletecommentId } = req.params;
  const deleteStatus = await commentCRUD.deletecomment(id);
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
