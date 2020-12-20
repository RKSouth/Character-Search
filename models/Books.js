// requiring mongoose and using it to create a new schema. 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema for the books that will be saved to the data base. 
const bookSchema = new Schema({
  title: { type: String, required: false },
  author: { type: Array, required: false },
  description: {type: String, required: false},
  date: { type: Date, default: Date.now },
  image: {type: String, required: false},
  link: {type: String, required: false},
  id: {type: String, required: true, unique: true}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book