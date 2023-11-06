import { hash, compare } from "bcryptjs";

export const hastUser = async (password: string) => {
  const passwordHash = await hash(password, 8);
  return passwordHash;
};

export const comparePass = async (password: string, passwordHash: string) => {
  const response = await compare(password, passwordHash);
  return response;
};
