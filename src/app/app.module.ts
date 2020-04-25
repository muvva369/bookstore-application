import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { HomeComponent } from './home/home.component';
import { BookDescriptionComponent } from './book-description/book-description.component';
import { HomeService } from './home/home.service';
import { BookService } from './book-description/book.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    BookDescriptionComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService,HomeService,BookService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
