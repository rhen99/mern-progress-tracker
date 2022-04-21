const express = require("express");
const router = express.Router();
const {
  registerUser,
  login,
  getUser,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.get("/user", protect, getUser);
router.post("/", registerUser);
router.post("/login", login);
module.exports = router;
