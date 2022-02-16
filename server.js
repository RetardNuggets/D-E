const express = require("express");
const path = require("path");
const mainPath = path.resolve("./public/main/index.html");
const loginPath = path.resolve("./public/login/login.html");
const encodePath = path.resolve("./public/encode/encode.html");
const decodePath = path.resolve("./public/decode/decode.html");

const app = express();
const port = process.env.PORT || 4756;

app.get("/", (req, res) => {
  res.sendFile(mainPath);
});

app.get("/login", (req, res) => {
  res.sendFile(loginPath);
});

app.get("/encode", (req, res) => {
  res.sendFile(encodePath);
});

app.get("/decode", (req, res) => {
  res.sendFile(decodePath);
});

app.use(express.static("public/main"));

app.use(express.static("public/login"));

app.use(express.static("public/encode"));

app.use(express.static("public/decode"));

app.listen(port, () => {
  console.log(`Running service at ${port}`);
});
