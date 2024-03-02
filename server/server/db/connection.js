const mongoose = require("mongoose");
require("dotenv").config();

const DB_URI = `${process.env.MONGO_URI}`;

const url = DB_URI;

const connectToMongo = () => {
  mongoose.connect(url, { useNewUrlParser: true });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected: ", url);
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
