//Xu ly nghiep vu : CRUD

const CommentModel = require("./comment");

const getAllComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    //Tra ve ket qua
    res.send({
      success: 1,
      data: comments,
    });
  } catch (err) {
    //Tra ve trang thai loi
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};

module.exports = { getAllComments };
