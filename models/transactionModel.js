const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: [true, "Amount is required"],
    },
    category: {
      type: String,
      require: [true, "Category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      require: [true, "Desc is required"],
    },
    date: {
      type: String,
      require: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

const transactionModel = mongoose.model("transaction", transactionSchema);
module.exports = transactionModel;
