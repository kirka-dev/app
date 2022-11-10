import {BrandInterface} from "./brand.interface";
import {CategoryInterface} from "./category.interface";
import {ColorInterface} from "./color.interface";
import {PriceInterface} from "./price.interface";

export interface ProductInterface {
  id?: number,
  brand?: BrandInterface,
  category?: CategoryInterface,
  color?: ColorInterface,
  images?: string,
  model?: string,
  prices?: PriceInterface[],
  createdAt?: Date,
}
