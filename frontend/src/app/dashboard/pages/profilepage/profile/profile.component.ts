import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { UserdataService } from '../../../service/userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileFormGroup: FormGroup;
  authMessage = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userdataService: UserdataService,
    private localStorage: LocalstorageService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this._initProfileForm();

    const userId = this.localStorage.getUserId();
    if (!userId) return;

    this.userdataService.getUserData(userId).subscribe((data) => {
      let formdata: any = data[0];
      this.profileForm?.['firstname'].setValue(formdata.firstname);
      this.profileForm?.['lastname'].setValue(formdata.lastname);
      this.profileForm?.['mobnumber'].setValue(formdata.mobnumber);
      this.profileForm?.['address'].setValue(formdata.address);
      this.profileForm?.['state'].setValue(formdata.state);
      this.profileForm?.['city'].setValue(formdata.city);
      this.profileForm?.['pincode'].setValue(formdata.pincode);
      this.profileForm?.['email'].setValue(formdata.email);
      this.profileForm?.['education'].setValue(formdata.education);
      this.profileForm?.['country'].setValue(formdata.country);
      this.profileForm?.['region'].setValue(formdata.region);
      this.profileForm?.['experience'].setValue(formdata.experience);
      this.profileForm?.['details'].setValue(formdata.details);
    });
  }

  private _initProfileForm() {
    this.profileFormGroup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobnumber: ['', Validators.required],
      address: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pincode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      education: ['', Validators.required],
      country: ['', Validators.required],
      region: ['', Validators.required],
      experience: ['', Validators.required],
      details: ['', Validators.required],
    });
  }

  get profileForm() {
    return this.profileFormGroup.controls;
  }

  onSubmit() {
    const userId = this.localStorage.getUserId();
    if (!userId) return;

    const profileData = {
      firstname: this.profileForm?.['firstname'].value,
      lastname: this.profileForm?.['lastname'].value,
      mobnumber: this.profileForm?.['mobnumber'].value,
      address: this.profileForm?.['address'].value,
      state: this.profileForm?.['state'].value,
      city: this.profileForm?.['city'].value,
      pincode: this.profileForm?.['pincode'].value,
      email: this.profileForm?.['email'].value,
      education: this.profileForm?.['education'].value,
      country: this.profileForm?.['country'].value,
      region: this.profileForm?.['region'].value,
      experience: this.profileForm?.['experience'].value,
      details: this.profileForm?.['details'].value,
      user: userId,
    };

    this.userdataService.getUserData(userId).subscribe((data) => {
      if (data.length !== 0) {
        this.userdataService.deleteUserData(userId).subscribe(
          (data) => {
            console.log('Deleted');
            console.log(data);
          },
          (error: HttpErrorResponse) => {
            console.log(error);
            if (error.status !== 400) {
              this.authMessage = 'Error in the server, Please try again later';
            }
          }
        );
      }
      this.userdataService.saveUserData(profileData).subscribe(
        (data) => {
          console.log('Saved');
          console.log(data);
          this.userdataService.isEdit.next(false);
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          if (error.status !== 400) {
            this.authMessage = 'Error in the server, Please try again later';
          }
        }
      );
    });
  }

  onCancel() {
    this.userdataService.isEdit.next(false);
  }
}
