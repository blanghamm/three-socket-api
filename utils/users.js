const users = [{ test: 1 }];

function userJoin(id, room) {
  let x = (users.length % 30) * 25.05;
  let y = 0;
  let z = 0;
  let rotation = 0;
  let input = 0;
  // if ((users.length === 4, 8, 16)) {
  //   y = y - 40.05;
  //   x = 0;
  // }

  const user = { id, room, x, y, z, rotation, input };

  users.push(user);
  return user;
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

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = {
  userJoin,
  userLeave,
  users,
  userAction,
  userRotation,
  userMovement,
};
