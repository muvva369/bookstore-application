import { Component, OnInit} from '@angular/core';
import { HomeService } from './home.service'
import {Router}  from '@angular/router'
import { BookService } from '../book-description/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService,private router:Router, private bookService:BookService) { }
  books=[]
  category=""
  ngOnInit() {
    this.getBooks("topbooks");
    this.displayBooks();
  }
  getBooks(type) {
    this.homeService.getBooks(type).subscribe(
      (response) => {
        console.log(response)
        this.books=response
        this.category=this.books[0].category;
        // console.log(this.books)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  displayBooks() {

  }
   passData(book)
   {
        // console.log("is it coming here?",book)
        this.bookService.setBook(book)
        this.router.navigate(["/bookdescription"])
   }

}
