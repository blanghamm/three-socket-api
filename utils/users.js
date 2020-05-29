const users = [];

function createGrid() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 1; j++) {
      const x = i * 20;
      const y = j * 30;
      const z = Math.random(j * 10) * 30;
      const rotationX = 0;
      const rotationY = 0;
      const rotationZ = 0;
      const input = 0;
      const aiMovement = Math.random(Math.sin(4)) / 50;
      const id = null;
      const color = 0;
      const scaleX = 0;
      const scaleY = 0;
      const scaleZ = 0;
      const name = "anon";
      const user = {
        id,
        x,
        y,
        z,
        rotationX,
        input,
        aiMovement,
        name,
        scaleX,
        scaleY,
        scaleZ,
        color,
      };
      users.push(user);
    }
  }
}

//write indivdual function for movement on axis and rotation

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

//Rotation axis functions

function userRotationX(id, rotationX) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationX = rotationX;
    }
    return users;
  });
}

function userRotationY(id, rotationY) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationY = rotationY;
    }
    return users;
  });
}

function userRotationZ(id, rotationZ) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.rotationZ = rotationZ;
    }
    return users;
  });
}

//User axis movement functions

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

//User scale fucntions

function userScaleX(id, scaleX) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleX = scaleX;
    }
    return users;
  });
}

function userScaleY(id, scaleY) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleY = scaleY;
    }
    return users;
  });
}

function userScaleZ(id, scaleZ) {
  users.map(function (entry, i) {
    const index = users.findIndex((user) => user.id === id);
    if (index === i) {
      entry.scaleZ = scaleZ;
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
    }
  });
}

module.exports = {
  userJoin,
  userLeave,
  users,
  userAction,
  userRotationX,
  userRotationY,
  userRotationZ,
  userMovement,
  createGrid,
  userNickName,
  userColorChange,
  userScaleX,
  userScaleY,
  userScaleZ,
};
