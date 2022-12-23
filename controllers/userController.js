const User = require("../modules/userModule");
const getUsers = async (req, res) => {
  var users = await User.find({});
  res.send(users);
};

const addUser = async (req, res) => {
  var newUser = new User(req.body);
  newUser.save();
  res.send({ message: "inserted" });
};

const updateUser = async (req, res) => {
  await User.updateOne({ _id: req.params.id }, req.body);
  res.send({ message: "updated" });
};

const deleteUser = async (req, res) => {
  await user.deleteOne({ _id: req.params.id });
  res.send({ message: "deleted" });
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
