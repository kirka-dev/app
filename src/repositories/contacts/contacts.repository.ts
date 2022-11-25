import axios, {AxiosResponse} from "axios";
import {ContactInterface} from "@shared/interfaces/contact.interface";

class ContactsRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(color: ContactInterface) {
    return axios.post(`${this.path}/`, color);
  }

  update(color: ContactInterface) {
    return axios.put(`${this.path}/${color.id}`, color)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<ContactInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new ContactsRepository('http://localhost:8000/contacts')
