import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  getProducts() {
    const url = './assets/products.json';
    return this.http.get(url);
  }


  onShow(product) {
    this.router.navigate(['/home', product.id]);
  }


}
