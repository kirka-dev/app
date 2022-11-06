import {MessengerInterface} from "./messenger.interface";
import {UserInterface} from "./user.interface";

export interface ContactInterface {
  id?: number,
  value?: string,
  user?: UserInterface,
  messenger?: MessengerInterface,
}
