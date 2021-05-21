const showTodoList = (req, res) => {
  res.json("it works");
};
const addTodoList = (req, res) => {
  res.json("it also works");
};

module.exports = { showTodoList, addTodoList };
