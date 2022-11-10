import axios, {AxiosResponse} from "axios";
import {StoreInterface} from "@shared/interfaces/store.interface";

class StoresRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(store: StoreInterface) {
    return axios.post(`${this.path}/`, store);
  }

  update(store: StoreInterface) {
    return axios.put(`${this.path}/${store.id}`, store)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<StoreInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new StoresRepository('http://localhost:8000/stores')
