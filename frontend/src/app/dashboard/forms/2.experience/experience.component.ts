import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experienceFormGroup: FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initExperienceForm();
  }
  backToEducation(){
    this.router
    .navigate(['dashboard/form/education'])

    
  }

  private _initExperienceForm(){
    this.experienceFormGroup = this.formBuilder.group({
      title:['',Validators.required],
      company:['', Validators.required],
      description:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required]
    });
}

get experienceForm() {
  return this.experienceFormGroup.controls;
}

onSubmit(){
  const experienceData = {
    title: this.experienceForm?.['title'].value,
    company: this.experienceForm?.['company'].value,
    description: this.experienceForm?.['description'].value,
    from: this.experienceForm?.['from'].value,
    to: this.experienceForm?.['to'].value,
  }

  this.formService.save(experienceData,'experience');

  this.router.navigate(['dashboard/form/skills'])
}
}
