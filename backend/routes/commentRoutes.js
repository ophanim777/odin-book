const router = require("express").Router();

const commentController =
require("../controllers/commentController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.post(
  "/:postId",
  isAuthenticated,
  commentController.createComment
);

router.delete(
  "/:id",
  isAuthenticated,
  commentController.deleteComment
);

module.exports = router;