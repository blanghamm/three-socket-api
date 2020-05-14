const users = [];

function userJoin(id, room) {
  const user = { id, room };
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
