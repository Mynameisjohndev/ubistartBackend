import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserSchema", UserSchema);