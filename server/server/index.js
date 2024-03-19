const express = require("express");
const cors = require("cors");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");

const passport = require("passport");

require("dotenv").config();
const connectToMongo = require("./db/connection");
const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());

app.listen(port, () => {
  console.log(`Server listening on port ${port} using IPv6`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!! Good Luck with your capstones :D"
  );
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/admin", adminRoute);
app.use("/user", userRoute);

module.exports = app;
