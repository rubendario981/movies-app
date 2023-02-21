import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin = this.fb.group({
    email: ["", [
      Validators.required,
      Validators.minLength(5),
    ]],
    password: [""],
    agreeTerms: [false]
  })
  userLogin2: FormGroup | undefined;
  constructor(private fb: FormBuilder){
  }
  
  ngOnInit(): void {
  }

  login(){
    
  }
}
