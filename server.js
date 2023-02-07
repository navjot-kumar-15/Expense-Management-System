const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
// config dotenv file/
dotenv.config();
const PORT = 8080 || process.env.PORT;

// Database call
connectDb();

// Rest object
const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// User Routes
app.use("/api/users", require("./routes/userRouter"));
// Transaction Routes
app.use("/api/transaction", require("./routes/transactionRoute"));

// Listen server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
