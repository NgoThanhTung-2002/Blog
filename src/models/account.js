const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/Blog")
  .then(() => console.log("Connected!"));

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", AccountSchema);

module.exports = AccountModel;
