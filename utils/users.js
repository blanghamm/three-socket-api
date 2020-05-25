const users = [];

function userJoin(id, room) {
  const x = (users.length % 30) * 40.05;
  const y = (users.length / 30) * 1.05;
  const z = 0;
  const user = { id, room, x, y, z };

  users.push(user);
  return user;
}

function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

module.exports = { userJoin, userLeave, users };
