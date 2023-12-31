import mongoose, { model } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const authSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);

authSchema.plugin(passportLocalMongoose, { usernameField: "email" });

export const Auth = mongoose.Schema("Auth",authSchema)
