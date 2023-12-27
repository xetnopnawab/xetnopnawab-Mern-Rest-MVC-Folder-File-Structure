//import module
import mongoose from "mongoose";
// import { plm } from "passport-local-mongoose";

// Make User Schema
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
    },
    catagories: [
      {
        type: String,
      },
    ],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    dp: {
      type: String, // Assuming dp is a file path or URL, modify as needed
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    fullname: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // its store createAt and updatedAt information about documents and model
);
// userSchema.plugin(plm);
//module.exports = mongoose.model("User", userSchema); or
export const User = mongoose.model("Users", userSchema);
