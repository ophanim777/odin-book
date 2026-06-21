const router = require("express").Router();

const profileController =
require("../controllers/profileController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.get(
  "/:id",
  isAuthenticated,
  profileController.getProfile
);

router.patch(
  "/",
  isAuthenticated,
  profileController.updateBio
);

module.exports = router;