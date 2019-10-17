import { Component, OnInit } from '@angular/core';
import {OrderhistoryService} from './orderhistory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../app.service';



@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  oh;
  constructor(private ohservice: OrderhistoryService, private router: Router, private route: ActivatedRoute, private app: AppService) { }

  ngOnInit() {
    if (!this.app.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
    this.ohservice.getOrderHistory().subscribe((data) => {
      this.oh = data;
    });
  }

}
