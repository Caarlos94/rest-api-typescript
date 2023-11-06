import { Auth } from "./interface-auth";

export interface User extends Auth {
  name: String;
  description: String;
}
