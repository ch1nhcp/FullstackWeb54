const router = require("express").Router();
const postController = require("./post.controller");

// Router tap hop cac routings co tien to /api/posts
router.get("/", postController.getAllPosts);
router.get("/:id", postController.getPost);
router.post("/", postController.createPost);
router.post("/:postId", postController.updatePost);
router.delete("/:postId", postController.deletePost);

router.put("/:postId/like", postController.incLikePost);
router.put("/:postId/comments", postController.getCommentByPost);
module.exports = router;
