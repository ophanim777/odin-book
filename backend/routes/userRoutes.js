const router = require("express").Router();

const userController =
require("../controllers/userController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.get(
  "/",
  isAuthenticated,
  userController.getUsers
);

router.get(
  "/:id",
  isAuthenticated,
  userController.getUser
);

module.exports = router;