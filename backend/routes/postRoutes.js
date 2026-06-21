const router = require("express").Router();

const postController =
require("../controllers/postController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.get(
  "/",
  isAuthenticated,
  postController.getTimeline
);

router.post(
  "/",
  isAuthenticated,
  postController.createPost
);

router.get(
  "/:id",
  isAuthenticated,
  postController.getPost
);

router.delete(
  "/:id",
  isAuthenticated,
  postController.deletePost
);

module.exports = router;