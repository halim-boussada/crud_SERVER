const mongoose = require("./connection");

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  age: Number,
  job: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
