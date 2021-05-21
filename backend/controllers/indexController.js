const TodoItem = require("../models/TodoItem");
const showTodoList = (req, res) => {
  res.json("it works");
};
const addTodoList = (req, res) => {
  console.log(req.body, req.file);
  const newItemData = new TodoItem({
    task: req.body.task,
    time: req.body.time,
    importance: req.body.importance,
    duration: req.body.duration,
    itemPhoto: `/uploads/${req.file.filename}`,
  });
  newItemData.save(() => {
    res.json("New todo added!");
  });
};

module.exports = { showTodoList, addTodoList };
