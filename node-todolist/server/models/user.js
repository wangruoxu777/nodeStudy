const db = require("../config/db");
const userModel = "../schema/user.js";
const TodolistDb = db.Todolist;
const User = TodolistDb.import(userModel);
const getUserById = function*(id) {
  const userInfo = yield User.findOne({
    where: {
      id: id
    }
  });
  return userInfo;
};

module.exports = {
  getUserById
};
