import { Component, OnInit } from '@angular/core';
import {MyprofileService} from './myprofile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppService} from '../app.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  user;
  disabled = true;
  url = 'http://localhost:2020/users/update';
  constructor(private myProfileService: MyprofileService, private router: Router, private route: ActivatedRoute, private http: HttpClient, private app: AppService) { }

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
      alert('Profile Updated Successfully');
      this.router.navigate(['/myprofile']);
      this.disabled = true;
    });
  }

}
