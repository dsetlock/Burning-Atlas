// Sample service that works with the Mongoose 'User' model.
const User = require('../models/User');

exports.getAllUsers = () => User.find();

exports.getUser = (id) => User.findById(id);

exports.createUser = (userData) => User.create(userData);

exports.updateUser = (id, userData) => User.findByIdAndUpdate(id, userData, { new: true });

exports.deleteUser = (id) => User.findByIdAndRemove(id);
