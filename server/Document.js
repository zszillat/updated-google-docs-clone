const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  _id: String,
  data: Object,
}, {
  timestamps: true
});

module.exports = mongoose.model("Document", documentSchema);