import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router, private loginservice: AuthenticationService, private appservice: AppService) { }

  ngOnInit() {
    if (this.appservice.checkLogin()) {
      this.router.navigate(['home']);
    }

  }

  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.appservice.isLoggedIn(true);
        this.router.navigate(['home']);
      }
    );

  }

  logout() {
    this.appservice.isLoggedIn(false);
  }


}
