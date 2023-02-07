const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

// Router object
const router = express.Router();

// Router: 1
// POST || LOGIN USER
router.post("/login", loginController);

// Router: 2
// POST || REGISTER USER
router.post("/register", registerController);

module.exports = router;
