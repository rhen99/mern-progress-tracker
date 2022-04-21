const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  username: {
    type: String,
    required: [true, "Please add a username"],
  },
  password: {
    type: String,
    required: [true, "Please add a username."],
  },
});

module.exports = mongoose.model("User", userSchema);
