import { Component, OnInit, Input } from '@angular/core';
// import { EventEmitter } from 'protractor';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {
  book:any;
  constructor(private bookService:BookService) { }

  ngOnInit() {
    this.book=this.bookService.getBook()
    console.log("book is ",this.book)
  }

}
