const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: false},
  image: {type: String, required: false},
  attack: {type: Array, required: false},
  id: {type: String, required: true, unique: true}
});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;
