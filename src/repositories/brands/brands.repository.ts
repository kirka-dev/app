import axios, {AxiosResponse} from "axios";
import {BrandInterface} from "@shared/interfaces/brand.interface";

class BrandsRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(brand: BrandInterface) {
    return axios.post(`${this.path}/`, brand);
  }

  update(brand: BrandInterface) {
    return axios.put(`${this.path}/${brand.id}`, brand)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<BrandInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new BrandsRepository('http://localhost:8000/brands')
