const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");
const PORT = process.env.PORT || 3005;
const { userJoin, userLeave, users, getCurrentUser } = require("./utils/users");

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

let clientNum = [];
let test = users;

io.on("connection", (socket) => {
  socket.on("subscribe", (room) => {
    const user = userJoin(socket.id, room);
    socket.join(user.room);
    io.to("art room").emit("clientsJoined", test);
  });
  clientNum.push(Object.keys(io.sockets.in("control room").connected).length);

  console.log(clientNum);
  console.log("join log ", test);

  socket.on("disconnect", () => {
    clientNum.pop(Object.keys(io.sockets.in("control room").connected).length);
    const user = userLeave(socket.id);
    io.to("art room").emit("clientsLeave", test);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
