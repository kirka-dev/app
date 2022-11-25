import axios, {AxiosResponse} from "axios";
import {SectionInterface} from "@shared/interfaces/section.interface";

class SectionsRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(color: SectionInterface) {
    return axios.post(`${this.path}/`, color);
  }

  update(color: SectionInterface) {
    return axios.put(`${this.path}/${color.id}`, color)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<SectionInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new SectionsRepository('http://localhost:8000/sections')
