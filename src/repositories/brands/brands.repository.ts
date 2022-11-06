import axios, {AxiosResponse} from "axios";
import {BrandInterface} from "../../shared/interfaces/brand.interface";

class BrandsRepository {
  create() {

  }

  update() {

  }

  remove(id: number) {

  }

  findOne(id: number) {

  }

  findAll(): Promise<AxiosResponse<BrandInterface[], any>> {
    return axios.get('http://localhost:8000/brands/');
  }
}

export default new BrandsRepository()
