const express = require("express");
const path = require("path");
const loginPath = path.resolve("./public/login/login.html");
const encodePath = path.resolve("./public/encode/encode.html");
const decodePath = path.resolve("./public/decode/decode.html");

const app = express();
const port = process.env.PORT || 4756;

app.get("/login", (req, res) => {
  res.sendFile(loginPath);
});

app.get("/encode", (req, res) => {
  res.sendFile(encodePath);
});

app.get("/decode", (req, res) => {
  res.sendFile(decodePath);
});

app.get("/api/encode", (req, res) => {
  
});

app.use(express.static("public/login"));

app.use(express.static("public/encode"));

app.listen(port, () => {
  console.log(`Running service at ${port}`);
});
