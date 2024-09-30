const mongoose = require("mongoose");
const { string } = require("postcss-selector-parser");

const userSchema = new mongoose.Schema({
  item: { type: String, required: true },
  amount: { type: Int8Array, required: true },
  name: { type: String, required: true },
  class: { type: String, required: true },
  date: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
