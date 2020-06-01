const users = [];

const colors = [
  "#A2CCB6",
  "#FCEEB5",
  "#EE786E",
  "#e0feff",
  "lightpink",
  "lightblue",
];

//write indivdual function for movement on axis and rotation

function userJoin(id, room) {
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      const x = i + users.length * 10;
      const y = j + users.length * 10;
      const z = 0;
      const rotationX = 0;
      const rotationY = 0;
      const rotationZ = 0;
      const randomRotation = Math.round(Math.random()) * 45;
      const input = 0;
      const random = Math.random();
      const aiMovement = 0;
      const color = colors[Math.floor(Math.random() * (colors.length - 1))];
      const scaleX = 1;
      const scaleY = 0;
      const scaleZ = 0;
      const name = "anon";
      const user = {
        id,
        x,
        y,
        z,
        rotationX,
        rotationZ,
        input,
        aiMovement,
        name,
        scaleX,
        scaleY,
        scaleZ,
        color,
        random,
        randomRotation,
      };
      users.push(user);
    }
  }

  return users;
}

//Rotation axis functions

function userRotationX(id, rotationX) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationX = rotationX;
    }
    return users;
  });
}

function userRotationY(id, rotationY) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationY = rotationY;
    }
    return users;
  });
}

function userRotationZ(id, rotationZ) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationZ = rotationZ;
    }
    return users;
  });
}

//User axis movement functions

function userMovementX(id, movementX) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.x = movementX;
    }
    return users;
  });
}

function userMovementY(id, movementY) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.y = movementY;
    }
    return users;
  });
}

function userMovementZ(id, movementZ) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.z = movementZ;
    }
    return users;
  });
}

function userAction(id, input) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.input = input;
    }
    return users;
  });
}

function userNickName(id, name) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.name = name;
    }
    return users;
  });
}

function userColorChange(id, color) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.color = color;
    }
    return users;
  });
}

//User scale fucntions

function userScaleX(id, scaleX) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleX = scaleX;
    }
    return users;
  });
}

function userScaleY(id, scaleY) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleY = scaleY;
    }
    return users;
  });
}

function userScaleZ(id, scaleZ) {
  users.forEach(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleZ = scaleZ;
    }
    return users;
  });
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1)[0];
  }
}

module.exports = {
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
};
