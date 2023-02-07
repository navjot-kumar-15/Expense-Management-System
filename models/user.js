const mongoose = require("mongoose");

// Schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"],
    },
    email: {
      type: String,
      require: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "email is required "],
    },
  },
  {
    timestamps: true,
  }
);

// Export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
