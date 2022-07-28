import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // displayModal: boolean;
  displayModal = true;
  signupFormGroup: FormGroup;
  constructor(
    private homeService: HomeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.homeService.toggle.subscribe((toggle) => {
      if (toggle) {
        // this.displayModal = true;
      }
      this._initSignupForm();
    });
  }
  private _initSignupForm() {
    this.signupFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      checkbox: [false, Validators.requiredTrue],
      password: ['', Validators.required],
    });
  }

  get signupForm() {
    return this.signupFormGroup.controls;
  }

  onSignup() {
    if (this.signupFormGroup.invalid) return;

    const signupData = {
      name: this.signupForm?.['name'].value,
      email: this.signupForm?.['email'].value,
      password: this.signupForm?.['password'].value,
    };
  }
}
