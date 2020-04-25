import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {credentials} from '../login/login';
import {SignupService} from './signup.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  errorMessage:string;
  successMessage: string;
  constructor(private formBuilder:FormBuilder,private signupService:SignupService,private router:Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.signupForm= this.formBuilder.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      uname:['',Validators.required],
      pass:['',Validators.required]
    })
  }
  signup(){
    let user:credentials = new credentials();
    user.firstname=this.signupForm.value.fname;
    user.lastname=this.signupForm.value.lname;
    user.username=this.signupForm.value.uname;
    user.password=this.signupForm.value.pass;
    // console.log("in signup user is ",user);
    this.signupService.signup(user).subscribe(
      (response)=>{
        console.log(response)
        this.successMessage="Yayy! You belong to our family now..login to check the store"
        this.signupForm.reset();
      },
      (error)=>{
        this.errorMessage= "uhoh!! Something's wrong";
      });}   

} 
