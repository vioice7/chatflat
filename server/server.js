const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chatMessage", (message) => {
    
    const now = new Date();
    const time = now.toTimeString().split(" ")[0];

    const messageWithTime = {
      username: message.username,
      message: message.message,
      time: time
    };

    io.emit("chatMessage", messageWithTime);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server running on port :3000");
});
