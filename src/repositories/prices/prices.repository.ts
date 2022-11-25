import axios, {AxiosResponse} from "axios";
import {PriceInterface} from "@shared/interfaces/price.interface";

class PricesRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(color: PriceInterface) {
    return axios.post(`${this.path}/`, color);
  }

  update(color: PriceInterface) {
    return axios.put(`${this.path}/${color.id}`, color)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<PriceInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new PricesRepository('http://localhost:8000/prices')
