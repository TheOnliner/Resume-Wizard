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
  disable:boolean = false;
  
  constructor(private router:Router, private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initContactForm();

    let data:any = this.formService.getData('contact');
    if(data){
      this.contactForm?.['firstName'].setValue(data.firstName);
      this.contactForm?.['lastName'].setValue(data.lastName);
      this.contactForm?.['email'].setValue(data.email);
      this.contactForm?.['phoneNumber'].setValue(data.phoneNumber);
      this.contactForm?.['address'].setValue(data.address);
      this.contactForm?.['city'].setValue(data.city);
      this.contactForm?.['state'].setValue(data.state);
    }

    let prevData:any = this.formService.getData('careerObjective')
    if(!prevData) this.disable = true;
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
