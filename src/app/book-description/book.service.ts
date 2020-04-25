import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book:any;
  constructor() { }
  setBook(book){
    this.book=book
  }
  getBook(){
    return this.book
  }
}
