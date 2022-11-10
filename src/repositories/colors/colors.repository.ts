import axios, {AxiosResponse} from "axios";
import {ColorInterface} from "@shared/interfaces/color.interface";

class ColorsRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(color: ColorInterface) {
    return axios.post(`${this.path}/`, color);
  }

  update(color: ColorInterface) {
    return axios.put(`${this.path}/${color.id}`, color)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<ColorInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new ColorsRepository('http://localhost:8000/colors')
