const mongoose = require("mongoose");

const apprenticeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  leadID: {
    type: String,
    required: true,
  },
});

module.exports = Apprentice = mongoose.model("apprentice", apprenticeSchema);
