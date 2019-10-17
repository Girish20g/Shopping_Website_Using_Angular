import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
  name;
  brand;
  category;
  code;
  description;
  imgsrc;
  quantity;
  // tslint:disable-next-line:variable-name
  supplierId;
  // tslint:disable-next-line:variable-name
  unitPrice;
  id;
  prods;
  url = 'http://localhost:2020/api/additems';
  constructor(private http: HttpClient, private route: Router, private serve: AppService, private r: ActivatedRoute) { }

  ngOnInit() {
    if (!this.serve.checkLogin()) {
      this.route.navigate(['/sign_in']);
    }
    if (this.serve.checkEdit()) {
      this.r.queryParamMap.subscribe((data) => {
        this.id = data.get('id');
        this.serve.showProductDetails(this.id).subscribe((pdata) => {
          this.prods = pdata;
          this.name = this.prods.name;
          this.brand = this.prods.brand;
          this.category = this.prods.category;
          this.code =  this.prods.code;
          this.description =  this.prods.description;
          this.imgsrc =  this.prods.imgsrc;
          this.quantity =  this.prods.quantity;
          this.supplierId =  this.prods.supplierId;
          this.unitPrice =  this.prods.unitPrice;
        });
      });
    }
  }
  addproduct() {
    const ar = {
      name: this.name,
      brand: this.brand,
      category: this.category,
      code: this.code,
      description: this.description,
      imgsrc: this.imgsrc,
      quantity: this.quantity,
      supplierId: this.supplierId,
      unitPrice: this.unitPrice
    };
    this.http.post(this.url, ar).subscribe((data) => {
      alert('Product Added Successfully');
      this.route.navigate(['/home']);
    });
  }

  editP() {
    this.serve.editproduct(this.id, {
      name: this.name,
      brand: this.brand,
      category: this.category,
      code: this.code,
      description: this.description,
      imgsrc: this.imgsrc,
      quantity: this.quantity,
      supplierId: this.supplierId,
      unitPrice: this.unitPrice
    }).subscribe((data) => {
      console.log(this.id);
      sessionStorage.removeItem('edit');
      alert('Product Updated Successfully!!');
      this.route.navigate(['/home']);
    });
  }

}
