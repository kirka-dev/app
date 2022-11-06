import {StoreInterface} from "./store.interface";

export interface PriceInterface {
  id?: number,
  price?: string,
  link?: string,
  product?: string,
  store?: StoreInterface,
  updatedAt?: Date,
}
