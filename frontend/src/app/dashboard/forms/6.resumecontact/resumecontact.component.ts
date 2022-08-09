import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-resumecontact',
  templateUrl: './resumecontact.component.html',
  styleUrls: ['./resumecontact.component.scss']
})
export class ResumecontactComponent implements OnInit {
  contactFormGroup: FormGroup;

  constructor(private router:Router, private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initContactForm();
  }
  backToCareerObjective(){
    this.router.navigate(['dashboard/form/career-objective'])
  }

private _initContactForm(){
  this.contactFormGroup = this.formBuilder.group({
    firstName:['',Validators.required],
    lastName:['', Validators.required],
    email:['',Validators.required],
    phoneNumber:['',Validators.required],
    address:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
  });
}

get contactForm() {
  return this.contactFormGroup.controls;
}

  onSubmit(){
    const contactData = {
      firstName: this.contactForm?.['firstName'].value,
      lastName: this.contactForm?.['lastName'].value,
      email: this.contactForm?.['email'].value,
      phoneNumber: this.contactForm?.['phoneNumber'].value,
      address: this.contactForm?.['address'].value,
      city: this.contactForm?.['city'].value,
      state: this.contactForm?.['state'].value,
    }
    
    this.formService.save(contactData,'contact');
    
    this.router.navigate(['dashboard/form/templates'])
  }
}
