import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationFormGroup:FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(){
    this._initEducationForm();
  }

private _initEducationForm(){
  this.educationFormGroup = this.formBuilder.group({
    school:['',Validators.required],
    degree:['', Validators.required],
    major:['',Validators.required],
    from:['',Validators.required],
    to:['',Validators.required]
  });
}

get educationForm() {
  return this.educationFormGroup.controls;
}

  backToDashboard(){
    this.router.navigate(['dashboard'])

    // this.educationForm?.['school'].setValue(this.educationData.['school']);
    // this.educationForm?.['degree'].setValue(educationData.degree);
    // this.educationForm?.['major'].setValue(educationData.major);
    // this.educationForm?.['from'].setValue(educationData.from);
    // this.educationForm?.['to'].setValue(educationData.to);
  }

  onSubmit(){
    const educationData = {
      school: this.educationForm?.['school'].value,
      degree: this.educationForm?.['degree'].value,
      major: this.educationForm?.['major'].value,
      from: this.educationForm?.['from'].value,
      to: this.educationForm?.['to'].value,
    };

    this.formService.save(educationData,'education')
    

    // this.educationForm['school'].setValue(educationData.school);
  //  this.educationForm['school'].setValue(educationData.school)
   this.router.navigate(['dashboard/form/experience'])
    // this.educationForm?.['degree'].setValue(educationData.degree);
    // this.educationForm?.['major'].setValue(educationData.major);
    // this.educationForm?.['from'].setValue(educationData.from);
    // this.educationForm?.['to'].setValue(educationData.to);
  }

}
