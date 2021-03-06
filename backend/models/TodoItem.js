const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TodoItemSchema = new Schema({
  task: String,
  time: String,
  importance: String,
  duration: Number,
  itemPhoto: String,
});
const TodoItem = mongoose.model("TodoItem", TodoItemSchema);
module.exports = TodoItem;
