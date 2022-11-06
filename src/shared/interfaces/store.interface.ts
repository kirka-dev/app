import {PriceInterface} from "./price.interface";

export interface StoreInterface {
  id?: number,
  name?: string,
  displayName?: string,
  delivery?: string,
  url?: string,
  prices?: PriceInterface,
}
