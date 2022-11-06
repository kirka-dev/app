import {ContactInterface} from "./contact.interface";

export interface MessengerInterface{
  id?: number,
  name?: string,
  displayName?: string,
  contact?: ContactInterface,
}
