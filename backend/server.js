import dotenv from "dotenv";
import connectDB from "./Src/db/db.js";
import { User } from "./Src/models/user.model.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB();

/* GET home page. */
app.get("/api/v1/", function (req, res) {
  res.send(
    "welcome to the page here we crud with Uesr \n got params /name/anyname"
  );
});
app.get("/api/v1/name/:username", function (req, res) {
  res.send(`hello Mr ${req.params.username}`);
});

//!create;
app.get("/api/v1/createusers", async (req, res, next) => {
  const createdUsers = await User.create({
    username: "xetnopnawab",
    password: "1234567890",
    fullname: "Nawab",
    email: "nawab@gmail.com",
    age: 30,
  });
  res.send(createdUsers);
});

//! Read
app.get("/api/v1/readusers", async (req, res, next) => {
  const allUser = await User.find({});
  res.send(allUser);
});
//! delete
app.get("/api/v1/delete", async (req, res, next) => {
  const deletedUsers = await User.findOneAndDelete({
    username: "xetnopnawab",
  });
  res.send(deletedUsers);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server is running on port https://localhost:${process.env.PORT}`
  );
});
