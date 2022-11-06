import {UserInterface} from "./user.interface";

export interface RoleInterface {
  id?: number,
  name?: string,
  displayName?: string,
  users?: UserInterface,
}
