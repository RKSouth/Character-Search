const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: false },
  author: { type: Array, required: false },
  description: {type: String, required: false},
  imageLinks: {type: String, required: false},
  infoLink: {type: String, required: false},
  id: {type: String, required: true, unique: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
