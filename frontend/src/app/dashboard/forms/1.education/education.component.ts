import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationFormGroup: FormGroup;
  isEditMode:boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formService: FormsService,
  ) {}

  ngOnInit() {
    this._initEducationForm();
    let data:any = this.formService.getData('education');
    if(data){
      this.educationForm?.['school'].setValue(data.school);
      this.educationForm?.['degree'].setValue(data.degree);
      this.educationForm?.['major'].setValue(data.major);
      this.educationForm?.['from'].setValue(data.from);
      this.educationForm?.['to'].setValue(data.to);
    } 
  }

  private _initEducationForm() {
    this.educationFormGroup = this.formBuilder.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      major: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }

  get educationForm() {
    return this.educationFormGroup.controls;
  }

  backToDashboard() {
    this.router.navigate(['dashboard/home']);
  }

  onSubmit() {
    const educationData = {
      school: this.educationForm?.['school'].value,
      degree: this.educationForm?.['degree'].value,
      major: this.educationForm?.['major'].value,
      from: this.educationForm?.['from'].value,
      to: this.educationForm?.['to'].value,
    };

    this.formService.save(educationData, 'education')
    
    this.router.navigate(['dashboard/form/experience']);
  }
}
