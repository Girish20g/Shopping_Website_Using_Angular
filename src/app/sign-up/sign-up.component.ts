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
  name;
  phone;
  gender;
  email;
  address;
  x;
  prod;
  url = 'http://localhost:2020/users/addUsers';

  ngOnInit() {
    this.appservice.getUsers().subscribe(data => {
      this.prod = data;
      console.log(data);
    });
  }

  userData() {
    this.x = 0;
    const ar = {username: this.username,  password: this.password, name: this.name, phone: this.phone, gender: this.gender, email: this.email, address: this.address};
    this.http.post(this.url, ar).subscribe(data => {
        alert('New User Added');
        this.router.navigate(['/sign_in']);
      });
  }


}
