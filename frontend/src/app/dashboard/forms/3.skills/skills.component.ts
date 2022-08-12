import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillFormGroup: FormGroup;
  disable:boolean = false;
  
  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initSkillForm();

    let data:any = this.formService.getData('skills');
    if(data){
      this.skillForm?.['skill1'].setValue(data.skill1);
      this.skillForm?.['skill2'].setValue(data.skill2);
      this.skillForm?.['skill3'].setValue(data.skill3);
      this.skillForm?.['skill4'].setValue(data.skill4);
      this.skillForm?.['language'].setValue(data.language);
    }

    let prevData:any = this.formService.getData('experience')
    if(!prevData) this.disable = true;
  }

backToExperience(){
  this.router
  .navigate(['dashboard/form/experience'])
}

private _initSkillForm(){
  this.skillFormGroup = this.formBuilder.group({
    skill1:['',Validators.required],
    skill2:['', Validators.required],
    skill3:['',Validators.required],
    skill4:['',Validators.required],
    language:['',Validators.required]
  });
}

get skillForm() {
  return this.skillFormGroup.controls;
}


onSubmit(){
  const skillData = {
    skill1: this.skillForm?.['skill1'].value,
    skill2: this.skillForm?.['skill2'].value,
    skill3: this.skillForm?.['skill3'].value,
    skill4: this.skillForm?.['skill4'].value,
    language: this.skillForm?.['language'].value,
  }

  this.formService.save(skillData,'skills');

  this.router
  .navigate(['dashboard/form/summary'])
}
}
