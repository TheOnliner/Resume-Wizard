import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../homepage/home.service';

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { LocalstorageService } from '../localstorage.service';
import { AuthService } from '../auth.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LocalstorageService: LocalstorageService,
    private auth: AuthService,
    private HomeService: HomeService
  ) {}

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
    this.auth.login(loginData.email, loginData.password).subscribe(
      (user) => {
        this.authError = false;
        this.LocalstorageService.setToken(user.token);
        if (user.isAdmin) {
          this.router.navigate(['/admin/home']);
        } else {
          this.router.navigate(['/dashboard/home']);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.authError = true;
        if (error.status !== 400) {
          this.authMessage = 'Error in the server, Please try again later';
        }
      }
    );
  }

  onSignup() {
    this.router.navigate(['/']);
    this.HomeService.toggle.next(true);
  }
}
