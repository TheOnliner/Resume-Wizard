import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;

  loginFormGroup: FormGroup;
  isSubmitted = false;
  authError = false;
  authMessage = '*Email or password is incorrect, Please try again';

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }

  onLogin() {
    if (this.loginFormGroup.invalid) return;

    this.isSubmitted = true;

    const loginData = {
      email: this.loginForm?.['email'].value,
      password: this.loginForm?.['password'].value,
    };
  }
}
