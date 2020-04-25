import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {credentials} from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  bookstoreUrl:string;
  constructor( private http: HttpClient) { 
    this.bookstoreUrl='http://localhost:7000/'
  }
  login(user):Observable<credentials>{
    return this.http.post(this.bookstoreUrl+'login',user) as Observable<credentials>;
  } 
}