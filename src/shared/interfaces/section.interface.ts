import {CategoryInterface} from "./category.interface";

export interface SectionInterface {
  id?: number,
  name?: string,
  displayName?: string,
  childs?: CategoryInterface,
}
