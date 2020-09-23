const mongoose = require('mongoose')

const textSchema = new mongoose.Schema({
  text: String,
});

module.exports = mongoose.model('Text', textSchema);
