import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup
  
  constructor(){
    this.signUpForm = new FormGroup({
      name: new FormControl("", [
        Validators.minLength(6),
        Validators.required
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("/[a-z]/g"),
        Validators.pattern("/[A-Z]/g"),
        Validators.pattern("/[0-9]/g"),
      ]),
      repeatPass: new FormControl(""),
      agreeTerms: new FormControl(false)
    })
  }
  signUp(){

  }
}
