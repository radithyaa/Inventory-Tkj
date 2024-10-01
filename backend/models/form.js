// models/form.js
const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  item: { type: String, required: true },
  total: { type: Number, required: true },
  name: { type: String, required: true },
  class: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Form", formSchema);
