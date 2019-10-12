import { Component, OnInit } from '@angular/core';
import {OrderhistoryService} from './orderhistory.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.scss']
})
export class OrderhistoryComponent implements OnInit {

  oh;
  constructor(private ohservice: OrderhistoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ohservice.getOrderHistory().subscribe((data) => {
      this.oh = data;
    });
  }

}
