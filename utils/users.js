const users = [];

function createGrid() {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 10; j++) {
      const x = i * 54;
      const y = j * 30;
      const z = Math.random(j * 10) * 30;
      const rotation = 0;
      const input = 0;
      const aiMovement = Math.random(Math.sin(4)) / 50;
      const id = null;
      const color = "green";
      const scale = 0;
      const name = "anon";
      const user = {
        id,
        x,
        y,
        z,
        rotation,
        input,
        aiMovement,
        name,
        scale,
        color,
      };
      users.push(user);
    }
  }
}

function userJoin(id, room) {
  var found = false;
  users.map(function (entry, i) {
    if (!found && !entry.id) {
      entry.id = id;
      found = true;
    }
  });
  return users;
}

function userRotation(id, rotation) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotation = rotation;
    }
    return users;
  });
}

function userMovement(id, axis) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.z = axis;
    }
    return users;
  });
}

function userAction(id, input) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.input = input;
    }
    return users;
  });
}

function userNickName(id, name) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.name = name;
    }
    return users;
  });
}

function userColorChange(id, color) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.color = color;
    }
    return users;
  });
}

function userScale(id, scale) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scale = scale;
    }
    return users;
  });
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  users.map(function (entry, i) {
    if (index === i) {
      entry.id = null;
      entry.input = 0;
      entry.rotation = 0;
    }
  });
}

module.exports = {
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
};
