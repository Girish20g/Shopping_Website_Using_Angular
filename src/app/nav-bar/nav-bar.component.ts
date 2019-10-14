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

  ngOnInit() {
    /*if (!this.appservice.checkLogin()) {
      this.router.navigate(['/sign_in']);
    }*/

  }

  logout() {
    this.appservice.isLoggedIn(false);
    this.router.navigate(['sign_in']);
  }


  }
