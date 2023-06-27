import { userTypes } from "../constants";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userTypes,
      default: "citizen",
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("Users", userSchema);
