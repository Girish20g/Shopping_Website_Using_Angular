import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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
  url = 'http://localhost:2020/api/additems';
  constructor(private http: HttpClient, private route: Router ) { }

  ngOnInit() {
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

}
