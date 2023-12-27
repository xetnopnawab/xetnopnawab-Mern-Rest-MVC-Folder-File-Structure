// const mongoose = require('mongoose');
import { DB_NAME } from "../../constants";

// ;( async () =>{
//  try{
//   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// }
//  catch(error){
//   console.error("ERROR: ", error)
// }
// })()

// const userSchema = mongoose.Schema({
//   username:String,
//   name:String,
//   age:Number
// })

// module.exports=mongoose.model('user',userSchema);

// new create model
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

;( async () =>{
 try{
  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
}
 catch(error){
  console.error("ERROR: ", error)
}
})()

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
userSchema.plugin(plm);
//module.exports = mongoose.model("User", userSchema); or
export const User = mongoose.model("Users", userSchema);
