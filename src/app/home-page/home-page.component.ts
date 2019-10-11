import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from './product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  products;
  category1;
  range;
  constructor(config: NgbCarouselConfig, private productService: ProductService, private router: Router, private route: ActivatedRoute) {
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;
  }

  ngOnInit() {
    this.category1 = null;
    this.productService.getProductsFromServer().subscribe((data) => {
      this.products = data;
    });
  }

  onShow(product) {
    this.router.navigate(['/home', product.id]);
  }

  getWithCategory(cat) {
    this.category1 = cat;
    this.range = null;
    this.productService.getWithCat(cat).subscribe((data) => {
      this.products = data;
    });
  }

  getWithPriceOnly(c1, c2) {
    if (!this.category1) {
      this.productService.getWithPrice(c1, c2).subscribe((data) => {
        this.products = data;
      });
    } else {
      this.productService.getWithCategoryAndPrice(this.category1, c1, c2).subscribe((data) => {
        this.products = data;
      });
    }
  }

  showWithBrand(b) {
    this.productService.getWithbrand(b).subscribe((data) => {
      this.products = data;
    });
  }
}

