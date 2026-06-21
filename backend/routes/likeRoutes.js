const router = require("express").Router();

const likeController =
require("../controllers/likeController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.post(
  "/:postId",
  isAuthenticated,
  likeController.likePost
);

router.delete(
  "/:postId",
  isAuthenticated,
  likeController.unlikePost
);

module.exports = router;