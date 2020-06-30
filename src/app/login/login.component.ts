import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private fb: FormBuilder) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
    }
    this.loginForm = this.fb.group(formControls);
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
  }

  login() {
    let data = this.loginForm.value;

    let user = new User(null,null,data.email,null,data.password);
  }

}
