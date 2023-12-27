const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/AbiBanaya");

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  password: String,
  description: String,
  catagories: {
    type: Array,
    default: []
  },
  datecreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("user", userSchema);
