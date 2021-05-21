const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
router.get("/show", indexController.showTodoList);
router.post("/add", indexController.addTodoList);
// router.post("/delete", indexController);
// router.post("/update", indexController);

module.exports = router;
