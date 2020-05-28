const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const helmet = require("helmet");
const PORT = process.env.PORT || 3005;
const {
  userJoin,
  userLeave,
  users,
  userAction,
  userRotation,
  userMovement,
  createGrid,
  userNickName,
  userColorChange,
  userScale,
} = require("./utils/users");

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

let test = users;

createGrid();

io.on("connection", (socket) => {
  //Joining a room
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

  //User Inputs

  socket.on("spawn", (input) => {
    userAction(socket.id, input);
    io.emit("actionId", test);
  });

  socket.on("updateUserRotation", (rotation) => {
    userRotation(socket.id, rotation);
    io.emit("userIsRotating", test);
  });

  socket.on("updateUserMovement", (axis) => {
    userMovement(socket.id, axis);
    io.emit("updateMovement", test);
  });

  socket.on("addNickName", (name) => {
    userNickName(socket.id, name);
    io.emit("updateNickName", test);
  });

  socket.on("updateUserColor", (color) => {
    userColorChange(socket.id, color);
    io.emit("updateColor", test);
  });

  socket.on("updateUserScale", (scale) => {
    userScale(socket.id, scale);
    io.emit("updateScale", test);
  });

  socket.on("disconnect", () => {
    userLeave(socket.id);
    io.emit("clientsLeave", test);

    console.log("join leave ", test);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
