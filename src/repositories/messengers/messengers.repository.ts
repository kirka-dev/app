import axios, {AxiosResponse} from "axios";
import {MessengerInterface} from "@shared/interfaces/messenger.interface";

class MessengersRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(color: MessengerInterface) {
    return axios.post(`${this.path}/`, color);
  }

  update(color: MessengerInterface) {
    return axios.put(`${this.path}/${color.id}`, color)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<MessengerInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new MessengersRepository('http://localhost:8000/messengers')
