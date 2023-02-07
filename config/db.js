const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://my-projects:newonemongo@cluster0.jc9849t.mongodb.net/expenseapp";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(
      `Server is running on ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDb;
