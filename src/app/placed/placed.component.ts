import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.scss']
})
export class PlacedComponent implements OnInit {

  constructor(private app: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.app.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
  }

}
