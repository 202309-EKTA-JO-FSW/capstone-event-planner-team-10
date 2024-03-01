const express = require("express");
const cors = require("cors");
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");

require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.set("view engine", "ejs");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

app.use("/admin", adminRoute);
app.use("/user", userRoute);

module.exports = app;