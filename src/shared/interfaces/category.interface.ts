import {SectionInterface} from "./section.interface";

export interface CategoryInterface {
  id?: number,
  name?: string,
  displayName?: string,
  parent?: SectionInterface,
}
