const express = require("express");
const path = require("path"); //기본 모듈
const app = express();
app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  // res.send("hello express world");
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/about", (req, res) => {
  // res.send("hello about world");
  res.sendFile(path.join(__dirname, "/about.html"));
});
app.get("/greeting", (req, res) => {
  res.sendFile(path.join(__dirname, "/greeting.html"));
});
app.get("/introduce", (req, res) => {
  res.sendFile(path.join(__dirname, "/introduce.html"));
});
app.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "/location.html"));
});
app.listen(8099, () => {
  console.log("8099 포트에서 express 서버 대기 중");
});

//파일을 직접 호출하는 것이 아닌 보여주기만 하는 것
