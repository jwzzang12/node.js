const express = require("express");
const http = require("http"); // node에 원래 부터 있던 모듈
const path = require("path"); // 이것도 node에 원래 부터 있던 모듈
//서버가 구동되는 폴더의 절대 경로를 알려줌
const app = express();
const moment = require("moment");
const socketIO = require("socket.io");
const server = http.createServer(app);
const io = socketIO(server); //여기서 클라이언트로 데이터 보냄
app.set("port", process.env.PORT || 8099);
app.use(express.static(path.join(__dirname, "/public")));
//정적파일을 서비스 할 때 나는 public 이라는 경로를 사용할 거다
const PORT = app.get("port");

io.on("connection", (socket) => {
  console.log("클라이언트 연결 되었습니다.");
  socket.on("chatting", (data) => {
    const sendTime = moment(new Date()).format("A hh:mm");
    io.emit("chatting", { nickName: data.nickName, msg: data.msg, time: sendTime });
  });
  //보낼땐 emit 받을때는 on
});
app.get("/", (req, res) => {
  res.send("hello express");
});
app.get("/chatting", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/chatting.html"));
  //path.join을 사용하면 지정된 컴퓨터 경로에 접근
});
server.listen(PORT, () => {
  console.log(`${PORT}에서 서버 대기 중`);
});
