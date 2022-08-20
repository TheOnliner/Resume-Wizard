import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth.service';
import { LocalstorageService } from 'src/app/localstorage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingsFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,private localStorage: LocalstorageService,
    private authService: AuthService,private router:Router,private messageService: MessageService,) { }

  ngOnInit(): void {
    this._initSettingsForm();
  }

  private _initSettingsForm() {
    this.settingsFormGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    });
  }

  onPasswordChange() {
    if (this.confirm_password.value == this.password.value) {
      this.confirm_password.setErrors(null);
    } else {
      this.confirm_password.setErrors({ mismatch: true });
    }
  }
  
  get password() {
    return this.settingsFormGroup.controls['password'];
  }

  get settingsForm(){
    return this.settingsFormGroup.controls;
  }
  
  get confirm_password() {
    return this.settingsFormGroup.controls['confirm_password'];
  }

  onSubmit(){
    const userId = this.localStorage.getUserId();
    console.log(userId);

    let password:string = this.settingsForm?.['password'].value;
    console.log(password);

    this.authService.updatePassword(userId,password).subscribe((data)=>{
      this.messageService.add({severity:'success', summary:'Success', detail:'Password changed successfully'})
      this.settingsFormGroup.reset();
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Password could not be changed'});
    }); 
  }
}
