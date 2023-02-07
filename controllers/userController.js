const userModel = require("../models/user");
const { body, validationResult } = require("express-validator");

// LOGIN CALLBACK
const loginController = // Validator using
  ([
    body("email", "Please check your email").isEmail(),
    body("password", "Password cannot be blank ").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send("Credentials not found");
      }
      res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  });

// REGISTER CALLBACK
const registerController = // Validator using
  ([
    body("email", "Please check your email").isEmail(),
    body("password", "Password cannot be blank ").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).json({
        success: true,
        newUser,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error,
      });
    }
  });

module.exports = { loginController, registerController };
