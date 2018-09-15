import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {ENV} from '../../../src/environments/environment';


@Injectable()
export class ApiServiceProvider {
  private baseURL = ENV.api_base_url;

  constructor(public http: HttpClient) {
  }

  getExpenses(){
    return this.http.get(this.baseURL + 'expenses/')
  }

  getPayMethods(){
    return this.http.get(this.baseURL + 'pay_methods/')
  }

  getCategories() {
    return this.http.get(this.baseURL + 'categories/')
  }

  createOrUpdateExpense(data) {
    let id = this.get_id(data);
    this.clean_data(data);
    let url = this.baseURL + 'expenses/';

    if (id){
      url = url + id;
      return this.http.put(url, data);
    }

    return this.http.post(url, data);
  }

  createOrUpdatePayMethod(data){
    let id = this.get_id(data);
    this.clean_data(data);
    let url = this.baseURL + 'pay_methods/';

    if (id){
      url = url + id;
      return this.http.put(url, data);
    }

    return this.http.post(url, data);
  }

  createOrUpdateCategory(data) {
    let id = this.get_id(data);
    this.clean_data(data);
    let url = this.baseURL + 'categories/';

    if (id) {
      url = url + id;
      return this.http.put(url, data);
    }

    return this.http.post(url, data);
  }

  get_id(data){
    if (this.data_has_id(data)){
      return data._id
    }

    return undefined;
  }

  data_has_id(data){
    if (data){
      if (data._id){
        return true;
      }
    }

    return false;
  }

  clean_data(data){
    if (this.data_has_id(data)){
      delete data._id
    }
  }
}
