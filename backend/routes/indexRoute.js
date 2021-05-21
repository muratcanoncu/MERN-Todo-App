const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
router.post("/add", upload.single("itemPhoto"), indexController.addTodoList);

// router.post("/delete", indexController);
// router.post("/update", indexController);
router.get("/show", indexController.showTodoList);
module.exports = router;
