const router = require("express").Router();

const followController =
require("../controllers/followController");

const {
  isAuthenticated
} = require("../middleware/authMiddleware");

router.post(
  "/:id/request",
  isAuthenticated,
  followController.sendRequest
);

router.patch(
  "/:id/accept",
  isAuthenticated,
  followController.acceptRequest
);

router.delete(
  "/:id/reject",
  isAuthenticated,
  followController.rejectRequest
);

module.exports = router;