import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderhistoryService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  getOrderHistory() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/orderhist';
    return this.httpClient.get(url, {headers});
  }

}
