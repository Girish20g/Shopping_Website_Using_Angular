import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsFromServer() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/items';
    return this.http.get(url, {headers});
  }

  getWithCat(cat) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/category/' + cat;
    return this.http.get(url, {headers});
  }

  getWithCategoryAndPrice(category, c1, c2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/' + category + '/' + c1 + '/' + c2;
    return this.http.get(url, {headers});
  }

  getWithPrice(c1, c2) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/' + c1 + '/' + c2;
    return this.http.get(url, {headers});
  }
  getWithbrand(b) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/' + b;
    return this.http.get(url, {headers});
  }

  getWithBrandAndCategory(cat, b) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/category/brand/' + cat + '/' + b;
    return this.http.get(url, {headers});
  }

  getByName(name) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/search/' + name;
    return this.http.get(url, {headers});
  }

}
