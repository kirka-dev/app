import axios, {AxiosResponse} from "axios";
import {RoleInterface} from "@shared/interfaces/role.interface";

class RolesRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(roles: RoleInterface) {
    return axios.post(`${this.path}/`, roles);
  }

  update(roles: RoleInterface) {
    return axios.put(`${this.path}/${roles.id}`, roles)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<RoleInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new RolesRepository('http://localhost:8000/roles')
