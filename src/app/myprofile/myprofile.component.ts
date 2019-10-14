import { Component, OnInit } from '@angular/core';
import {MyprofileService} from './myprofile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  userImg = './assets/images/user.PNG';
  user;
  disabled = true;
  url = 'http://localhost:2020/users/update';
  constructor(private myProfileService: MyprofileService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.myProfileService.getUsers().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  toggle() {
    this.disabled = false;
  }

  save() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({Authorization: 'Basic ' + token});
    return this.http.put(this.url, this.user, {headers}).subscribe(data => {
      console.log(data);
      this.router.navigate(['/myprofile']);
      this.disabled = true;
    });
  }

}
