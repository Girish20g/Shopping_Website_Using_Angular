import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsFromServer() {
    const url = 'http://localhost:2020/api/items';
    return this.http.get(url);
  }
}
