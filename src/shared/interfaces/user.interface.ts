import {ContactInterface} from "./contact.interface";
import {RoleInterface} from "./role.interface";

export interface UserInterface {
  id?: number,
  email?: string,
  password?: string,
  contacts?: ContactInterface,
  name?: string,
  role?: RoleInterface,
  createdAt?: Date,
  updatedAt?: Date,
}
