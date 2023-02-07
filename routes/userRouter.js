const express = require("express");
const { body, validationResult } = require("express-validator");

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
router.post(
  "/register",
  // Validator using
  [
    body("name", "Enter the valid name").isLength({ min: 3 }),
    body("email", "Please check your email").isEmail(),
    body("password").isLength(5),
  ],
  registerController
);

module.exports = router;
