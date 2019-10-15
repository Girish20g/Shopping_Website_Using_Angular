import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient: HttpClient) { }

  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get('http://localhost:2020/users/validate', {headers}).pipe(
      map( data => {
          sessionStorage.setItem('token', btoa(username + ':' + password));
        }
      ));

  }

  /*isUserLoggedIn() {
    const user = sessionStorage.getItem('token');
    console.log(!(user === null));
    return !(user === null);
  }
*/
  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('admin');
  }
}
