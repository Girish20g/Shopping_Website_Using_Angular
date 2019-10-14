import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private httpClient: HttpClient) { }

  showProductDetails(id) {
    const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/items/' + id;
    return this.httpClient.get(url);
  }

  getcheck() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/checkout';
    return this.httpClient.get(url, {headers});
  }
}

