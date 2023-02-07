const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Desc is required"],
    },
    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  {
    timestamps: true,
  }
);

const transactionModel = mongoose.model("transaction", transactionSchema);
module.exports = transactionModel;
