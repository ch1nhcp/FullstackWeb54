//Xu ly nghiep vu : CRUD

const PostModel = require("./post");
const CommentModel = require("../comment/comment");

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    //Tra ve ket qua
    res.send({
      success: 1,
      data: posts,
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

// Get specified post
const getPost = async (req, res) => {
  try {
    const { postId } = req.params;

    const foundPost = await PostModel.findById(postId);

    res.send({
      success: 1,
      data: foundPost,
    });
  } catch (err) {
    res.status(400).send({
      success: 0,
      data: null,
      message: err.message || "Something went wrong",
    });
  }
};

// Create new post
const createPost = async (req, res) => {
  try {
    const newPostData = req.body;
    const newPost = await PostModel.create(newPostData);

    //Tra ve ket qua
    res.send({
      success: 1,
      data: newPost,
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

// Update specified post
const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const updatedPostData = req.body;
    const updatedPost = await PostModel.findByIdAndUpdate(
      postId,
      updatedPostData,
      { new: true } // de tra ve ket qua moi trong postman
    );
    //Tra ve ket qua
    res.send({
      success: 1,
      data: updatedPost,
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

// Delete specified post
const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const deletePost = await PostModel.findByIdAndDelete(postId);

    //Tra ve ket qua
    res.send({
      success: 1,
      data: deletePost,
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

// Increase like count of specified post
const incLikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await CommentModel.find({ postId });

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

// Get Comments on specified post
const getCommentByPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const updatedPost = await PostModel.findOneAndUpdate(
      { _id: postId },
      { $inc: { likeCount: 1 } },
      { new: true }
    );

    //Tra ve ket qua
    res.send({
      success: 1,
      data: updatedPost,
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

//Export module to use
module.exports = {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  incLikePost,
  getCommentByPost,
};
