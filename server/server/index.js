const express = require("express");
const cors = require("cors");
const router = express.Router();
const adminRoute = require("./routes/adminRoute");
const userRoute = require("./routes/userRoute");
const { createProxyMiddleware } = require("http-proxy-middleware");

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

const apiProxy = createProxyMiddleware({
  target: `18.153.163.168:${port}`,
  changeOrigin: true,
});

app.use("/", apiProxy);

app.listen(port, "localhost", () => {
  console.log(`Server listening on localhost:${port}`);
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

const http = require("http");
const proxyApp = express();

proxyApp.use(
  "/",
  createProxyMiddleware({
    target: `18.153.163.168:${port}`,
    changeOrigin: true,
  })
);

http.createServer(proxyApp).listen(8080, () => {
  console.log("Reverse proxy listening on port 80");
});

module.exports = app;
