import { Schema, model } from "mongoose";
import { User } from "../interfaces/interface-user";

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  description: String,
});

const UserModel = model("users", userSchema);

export { UserModel };
