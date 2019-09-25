import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  getProducts() {
    const url = './assets/products.json';
    return this.http.get(url);
  }

}
