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
  userRotationX,
  userRotationY,
  userRotationZ,
  userMovementX,
  userMovementY,
  userMovementZ,
  userNickName,
  userColorChange,
  userScaleX,
  userScaleY,
  userScaleZ,
  aiMoving,
} = require("./utils/users");

app.use(helmet());

app.get("*", (req, res) => {
  res.send("I am alive").status(200);
});

let test = users;

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

  //User rotation sockets
  socket.on("updateUserRotationX", (rotationX) => {
    userRotationX(socket.id, rotationX);
    io.emit("userRotationX", test);
  });
  socket.on("updateUserRotationY", (rotationY) => {
    userRotationY(socket.id, rotationY);
    io.emit("userRotationY", test);
  });
  socket.on("updateUserRotationZ", (rotationZ) => {
    userRotationZ(socket.id, rotationZ);
    io.emit("userRotationZ", test);
  });

  //User movement sockets, for each axis of movement
  socket.on("updateUserMovementX", (movementX) => {
    userMovementX(socket.id, movementX);
    io.emit("updateUserMovementX", test);
  });
  socket.on("updateUserMovementY", (movementY) => {
    userMovementY(socket.id, movementY);
    io.emit("updateMovementY", test);
  });
  socket.on("updateUserMovementZ", (movementZ) => {
    userMovementZ(socket.id, movementZ);
    io.emit("updateMovementY", test);
  });

  socket.on("addNickName", (name) => {
    userNickName(socket.id, name);
    io.emit("updateNickName", test);
  });

  socket.on("updateUserColor", (color) => {
    userColorChange(socket.id, color);
    io.emit("updateColor", test);
  });

  //User Scale Input and output sockets
  socket.on("updateUserScaleX", (scaleX) => {
    userScaleX(socket.id, scaleX);
    io.emit("updateScaleX", test);
  });
  socket.on("updateUserScaleY", (scaleY) => {
    userScaleY(socket.id, scaleY);
    io.emit("updateScaleY", test);
  });
  socket.on("updateUserScaleZ", (scaleZ) => {
    userScaleZ(socket.id, scaleZ);
    io.emit("updateScaleZ", test);
  });

  socket.on("disconnect", () => {
    userLeave(socket.id);
    io.emit("clientsLeave", test);

    console.log("join leave ", test);
  });
});

server.listen(PORT, () => console.log(`listening on port ${PORT}!`));
