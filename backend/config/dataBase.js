require("dotenv").config();
const mongoose = require("mongoose");

const dataBaseName = process.env.hiddenDataBaseName;
const dataBaseLink = process.env.hiddenDataBaseLink + dataBaseName;
const connectDataBase = async () => {
  try {
    await mongoose.connect(dataBaseLink, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is successfully connected");
  } catch (error) {
    console.log("Database connection is failed");
    process.exit();
  }
};
module.exports = connectDataBase;
