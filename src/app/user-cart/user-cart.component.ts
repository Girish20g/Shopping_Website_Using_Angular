import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {datepickerAnimation} from 'ngx-bootstrap/datepicker/datepicker-animations';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  cartItems;
  constructor(private router: Router, private route: ActivatedRoute, private userCartService: AppService) { }

  ngOnInit() {
    this.userCartService.showcart().subscribe((data) => {
      this.cartItems = data;
      console.log(data);
    });
  }

  remove(id) {
    this.userCartService.deleteItem(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
      console.log(id);
    });
  }
  decrease(id) {
    this.userCartService.decrement(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
    });
  }

  increase(id) {
    this.userCartService.increment(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
    });
  }

}
