import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private appservice: AppService, private router: Router) { }

  ngOnInit() {
    if (this.appservice.checkLogin()) {
      this.router.navigate(['home']);
    }

  }

  logout() {
    this.appservice.isLoggedIn(false);
    this.router.navigate(['sign_in']);
  }


}
