const router = require("express").Router();
const commentController = require("./comment.controller");

// Router tap hop cac routings co tien to /api/comments
router.get("/", commentController.getAllComments);

module.exports = router;
