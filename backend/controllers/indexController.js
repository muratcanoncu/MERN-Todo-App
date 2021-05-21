const showTodoList = (req, res) => {
  res.json("it works");
};
const addTodoList = (req, res) => {
  console.log(req.body, req.file);
  res.json("it also works");
};

module.exports = { showTodoList, addTodoList };
