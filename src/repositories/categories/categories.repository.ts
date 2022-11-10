import axios, {AxiosResponse} from "axios";
import {CategoryInterface} from "@shared/interfaces/category.interface";

class CategoriesRepository {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  create(category: CategoryInterface) {
    return axios.post(`${this.path}/`, category);
  }

  update(category: CategoryInterface) {
    return axios.put(`${this.path}/${category.id}`, category)
  }

  remove(id: number) {
    return axios.delete(`${this.path}/${id}`);
  }

  findOne(id: number) {
    return axios.get(`${this.path}/${id}`);
  }

  findAll(): Promise<AxiosResponse<CategoryInterface[]>> {
    return axios.get(`${this.path}/`);
  }
}

export default new CategoriesRepository('http://localhost:8000/categories')
