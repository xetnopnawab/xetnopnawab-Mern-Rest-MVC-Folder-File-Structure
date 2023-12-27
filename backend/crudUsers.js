import dotenv from "dotenv";
import connectDB from "./Src/db/db.js";
import { User } from "./Src/models/user.model.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB();

app.get("/api/v1/create", async (req, res, next) => {
  const userData = await User.create({
    username: "raj",
    fullname: "raj  bhai",
    password: "123456",
    email: "raj@gmail.com",
    description: "i am a girl with feshion love",
    catagories: ["feshion", "modeling", "designer", "artist"],
  });
  res.send(userData);
});
//!exact match filter
app.get("/api/v1/find", async (req, res, next) => {
  new RegExp(search, flags);
  new RegExp("^xeTnaaWab$", "i");
  const allUsers = await User.find({ username: "xetnopnawab" });
  res.send(allUsers);
});
//! catagory on based filter
app.get("/api/v1/find", async (req, res, next) => {
  new RegExp(search, flags);
  new RegExp("^xeTnaaWab$", "i");
  const allUsers = await User.find({ catagories: { $all: ["feshion"] } });
  res.send(allUsers);
});
//! date wise filter
app.get("/api/v1/find", async (req, res, next) => {
  const date1 = new Date("2023-11-29");
  const date2 = new Date("2023-11-30");
  const allUsers = await User.find({
    datecreated: { $gte: date1, $lte: date2 },
  });
  res.send(allUsers);
});
app.get("/api/v1/find", async (req, res, next) => {
  const allUsers = await User.find({
    catagories: { $exists: true },
  });
  res.send(allUsers);
});
app.get("/api/v1/find", async (req, res, next) => {
  const allUsers = await User.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$nickname" }, 0] },
        { $lte: [{ $strLenCP: "$nickname" }, 12] },
      ],
    },
  });
  res.send(allUsers);
});
app.listen(process.env.PORT || 4000, () => {
  console.log(
    `Server is running on port https://localhost:${process.env.PORT}`
  );
});
