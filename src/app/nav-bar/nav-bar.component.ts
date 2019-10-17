import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {NavBarService} from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  constructor(private appservice: AppService, private router: Router, private nav: NavBarService) { }
  user: Object = [];
  ngOnInit() {
    if (!this.appservice.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }
    this.nav.getUsers().subscribe(data => {
      this.user = data;
      console.log(data);
    });

  }

  logout() {
    if (this.appservice.checkLogin()) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('admin');
      this.appservice.isLoggedIn(false);
      this.router.navigate(['sign_in']);
    }
  }


  }
