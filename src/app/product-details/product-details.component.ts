import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductDetailsService} from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  product_Id;
  // tslint:disable-next-line:variable-name
  product_details = { };
  constructor(private productDetailsService: ProductDetailsService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'));
      this.product_Id = id;
    }),
      this.productDetailsService.showProductDetails(this.product_Id).subscribe((data) => {
        this.product_details = data;
      });

  }
  addItemsinCart() {
    this.productDetailsService.addToCart(this.product_Id).subscribe((data) => {
      this.product_details = data;
      this.router.navigate(['/cart']);
      console.log(data);
    });
  }

}
