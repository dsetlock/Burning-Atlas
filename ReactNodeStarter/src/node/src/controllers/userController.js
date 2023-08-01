//Sample controller to handle a basic CRUD operation for a user entity
const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUser = async (req, res, next) => {
  const user = await userService.getUser(req.params.id);
  res.json(user);
};

exports.createUser = async (req, res, next) => {
  const newUser = await userService.createUser(req.body);
  res.json(newUser);
};

exports.updateUser = async (req, res, next) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  res.json(updatedUser);
};

exports.deleteUser = async (req, res, next) => {
  await userService.deleteUser(req.params.id);
  res.status(204).send();
};
