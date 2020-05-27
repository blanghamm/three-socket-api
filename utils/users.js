const users = [];

function userJoin(id, room) {
  let x = (users.length % 30) * 25.05;
  let y = (users.length / 30) * 25.05;
  let z = 0;
  // if ((users.length === 4, 8, 16)) {
  //   y = y - 40.05;
  //   x = 0;
  // }

  const user = { id, room, x, y, z };

  users.push(user);
  return user;
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

module.exports = { userJoin, userLeave, users, userAction };
