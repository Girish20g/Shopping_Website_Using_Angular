import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private http: HttpClient, private appservice: AppService, private router: Router) { }

  username;
  password;
  url = 'http://localhost:2020/users/addUsers';

  ngOnInit() {
    if (this.appservice.checkLogin()) {
      this.router.navigate(['/home']);
    }

  }

  userData() {
    const ar = {username: this.username,  password: this.password};
    this.http.post(this.url, ar).subscribe(data => {
      this.router.navigate(['/sign_in']);
    });
  }


}
