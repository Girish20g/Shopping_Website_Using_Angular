import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(bool: boolean) {
    sessionStorage.setItem('auth', String(bool));
    return bool;
  }
  checkLogin() {
    const auth = sessionStorage.getItem('auth');
    return JSON.parse(auth);
  }

  isAdmin() {
    const ad = sessionStorage.getItem('admin');
    return JSON.parse(ad);
    console.log(ad);
  }

  myfun(bool: boolean) {
    sessionStorage.setItem('admin', String(bool));
    return bool;
  }

  edit(bool: boolean) {
    sessionStorage.setItem('edit', String(bool));
    return bool;
  }

  checkEdit() {
    const ad = sessionStorage.getItem('edit');
    return JSON.parse(ad);
    console.log(ad);
  }

  showcart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/showcart';
    return this.httpClient.get(url, {headers});
  }

  deleteItem(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/deleteItem/' + id;
    return this.httpClient.get(url, {headers});
  }

  increment(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/increment/1/' + id;
    return this.httpClient.get(url, {headers});
  }

  decrement(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/cart/decrement/1/' + id;
    return this.httpClient.get(url, {headers});
  }

  getUsers() {
    const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/users/getUsers';
    return this.httpClient.get(url);
  }

  editproduct(id , item) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + sessionStorage.getItem('token')});
    return this.httpClient.put('http://localhost:2020/api/edit-product?id=' + id, item, {headers});
  }

  showProductDetails(id) {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    const url = 'http://localhost:2020/api/items/' + id;
    return this.httpClient.get(url, {headers});
  }

}
