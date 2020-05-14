const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");
const PORT = process.env.PORT || 3005;
const { userJoin, userLeave, users } = require("./utils/users");

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

let test = users;

io.on("connection", (socket) => {
  socket.on("subscribe", (room) => {
    if (room === "control") {
      const user = userJoin(socket.id, room);
      socket.join(user.room);
    }

    io.to("control").emit("clientsJoined", test);
    io.emit("updateArt", test);
  });
  io.emit("updateOnLoad", test);

  console.log("join log ", test);

  socket.on("disconnect", () => {
    userLeave(socket.id);
    io.emit("clientsLeave", test);

    console.log("join leave ", test);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
