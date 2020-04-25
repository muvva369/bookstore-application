import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  bookstoreUrl:string;
  constructor(private http: HttpClient) {
    this.bookstoreUrl='http://localhost:7000/'
   }
   getBooks(type):Observable<any>{
    return this.http.get(this.bookstoreUrl+'books/'+type) as Observable<any>;
  } 
}
