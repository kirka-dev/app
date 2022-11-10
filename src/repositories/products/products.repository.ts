import axios, {AxiosResponse} from "axios";
import {ProductInterface} from "@shared/interfaces/product.interface";

class ProductsRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(product: ProductInterface) {
    return axios.post(`${this.path}/`, product);
  }

  update(product: ProductInterface) {
    return axios.put(`${this.path}/${product.id}`, product)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<ProductInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new ProductsRepository('http://localhost:8000/products')
