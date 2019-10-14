import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {datepickerAnimation} from 'ngx-bootstrap/datepicker/datepicker-animations';
import {AppService} from '../app.service';
import {UserCartService} from './user-cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  cartItems;

  total = 0;
  tax = 100;
  taxtotal = 0;
  constructor(private router: Router, private route: ActivatedRoute, private userCartService: AppService, private usercartservice: UserCartService) { }

  ngOnInit() {
    this.userCartService.showcart().subscribe((data) => {
      this.cartItems = data;
      // console.log(data);
      let sum = 0;

      for (let i = 0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;

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
      let sum = 0;

      for (let i=0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;
      this.ngOnInit();
    });
  }

  increase(id) {
    this.userCartService.increment(id).subscribe((data) => {
      this.cartItems = data;
      this.ngOnInit();
      let sum = 0;

      for (let i=0; i < this.cartItems.length; i++) {
        sum = sum + Number(this.cartItems[i].items.unitPrice) * (this.cartItems[i].quantity);
      }
      this.total = sum;
      this.taxtotal = this.total + this.tax;
      this.ngOnInit();
    });
  }

  detail(id) {
    // tslint:disable-next-line:no-unused-expression
    this.usercartservice.showProductDetails(id).subscribe((data) => {
      this.router.navigate(['/home/' + id]);
    });
  }

  checkout() {
    this.usercartservice.getcheck().subscribe((data) => {
      this.router.navigate(['/placed']);
    });
  }

}
