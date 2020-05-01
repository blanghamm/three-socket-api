const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");
const PORT = process.env.PORT || 3005;

let clients = {};

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

io.on("connection", (socket, room) => {
  console.log("connected: " + socket.id);
  socket.join("artroom");
  if (clients["art room"] == undefined) {
    clients["art room"] = 1;
  } else {
    clients["art room"]++;
  }
  console.log(clients);
  io.sockets.emit("clientsJoined", clients["art room"]);
  socket.on("outgoing", (x) => {
    console.log("x data " + x);
    io.emit("three", x);
  });

  socket.on("disconnect", () => {
    console.log("disconnected: " + socket.id), clients["art room"]--;
    io.sockets.emit("clientsLeft", clients["art room"]);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
