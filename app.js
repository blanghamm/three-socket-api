const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");
const PORT = process.env.PORT || 3005;
const { userJoin, userLeave } = require("./utils/users");

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

io.on("connection", (socket) => {
  let clientNum = Object.keys(io.sockets.in("control room").connected).length;
  socket.on("subscribe", (room) => {
    const user = userJoin(socket.id, room);
    socket.join(user.room);
  });

  io.to("art room").emit("clientsJoined", clientNum);

  // const clients = ;

  // if (clients["control room"] == undefined) {
  //   clients["control room"] = 1;
  // } else {
  //   clients["control room"]++;
  // }
  // if (io.nsps["/"].adapter.rooms["art room"]) {
  //   console.log(io.nsps["/"].adapter.rooms["art room"].length);
  // }

  console.log(clientNum);

  socket.on("disconnect", () => {});
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
