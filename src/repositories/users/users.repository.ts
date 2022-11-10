import axios, {AxiosResponse} from "axios";
import {UserInterface} from "@shared/interfaces/user.interface";

class UsersRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(user: UserInterface) {
    return axios.post(`${this.path}/`, user);
  }

  update(user: UserInterface) {
    return axios.put(`${this.path}/${user.id}`, user)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<UserInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new UsersRepository('http://localhost:8000/users')
