import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }

  showProductDetails(id) {
    const url = 'http://localhost:2020/api/items/' + id;
    return this.http.get(url);
  }

}
