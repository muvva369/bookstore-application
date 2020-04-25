import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {credentials} from './login';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string;
  successMessage: string;

  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router) {
    this.createForm();
   }
  ngOnInit() {}
  createForm(){
    console.log("it enters onint")
    this.loginForm= this.formBuilder.group({
      uname:['',Validators.required],
      pass:['',Validators.required]
    })
  }
  login(){
    let user:credentials = new credentials();

    user.username=this.loginForm.value.uname;
    user.password=this.loginForm.value.pass;

    //console.log("in emp login user is ",user);

    this.loginService.login(user).subscribe(
      (response)=>{
        if(response){
          sessionStorage.setItem("uname",user.username);
          this.router.navigate(['/home'])
        }
        else{
          this.errorMessage= "uhoh!! Wrong credentials...if u are a new user please signup";
          sessionStorage.clear();
        }
        
        console.log(response)
      },
      (error)=>{
        this.errorMessage= "something is wrong";
        sessionStorage.clear();
      });}   

}
