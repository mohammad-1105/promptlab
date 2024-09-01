import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  kindeID: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}

const userSchema: Schema<User> = new Schema(
  {
    kindeID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

const UserModel =
  mongoose.models.User<User> || mongoose.model<User>("User", userSchema);
export default UserModel;
