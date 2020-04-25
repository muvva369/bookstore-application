import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  employeeWebServiceUrl: string;
  constructor(private http: HttpClient) {
    this.employeeWebServiceUrl = 'http://localhost:7000/';
  }
  signup(user): Observable<credentials> {
    return this.http.post(this.employeeWebServiceUrl + 'signup', user) as Observable<credentials>;
  }
}
