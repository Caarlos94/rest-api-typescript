import { UserModel } from "../models/auth";
import { User } from "../interfaces/interface-user";
import { Auth } from "../interfaces/interface-auth";
import { comparePass, hastUser } from "../utils/hashHandler";
import { createToken } from "../utils/jwtHandler";

export async function loginUserDb(data: Auth) {
  const userExist = await UserModel.findOne({ email: data.email });
  if (!userExist) return "USER DOES NOT EXIST";
  const access = await comparePass(data.password, userExist.password);
  if (access) {
    const token = createToken(userExist.email);
    return { token: token, user: userExist };
  } else return "PASSWORD DO NOT MATCH";
}

export async function registerUserDb(data: User) {
  const userExist = await UserModel.findOne({ email: data.email });
  if (userExist) return "USER EXIST";
  const hashPass = await hastUser(data.password);
  const user = {
    name: data.name,
    email: data.email,
    password: hashPass,
  };
  const response = await UserModel.create(user);
  return response;
}
