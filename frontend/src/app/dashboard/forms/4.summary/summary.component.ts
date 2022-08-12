import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  prSummaryFormGroup: FormGroup;
  disable:boolean = false;

  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initPrSummaryForm();

    let data:any = this.formService.getData('professionalSummary');
    if(data){
      this.prSummaryForm?.['summary'].setValue(data.summary);
    }

    let prevData:any = this.formService.getData('skills')
    if(!prevData) this.disable = true;
  }
backToSkills(){
  this.router.navigate(['dashboard/form/skills'])
}

private _initPrSummaryForm(){
  this.prSummaryFormGroup = this.formBuilder.group({
    summary:['',Validators.required],
  });
}

get prSummaryForm() {
  return this.prSummaryFormGroup.controls;
}

onSubmit(){
  const prSummaryData = {
    summary: this.prSummaryForm?.['summary'].value,
  }

  this.formService.save(prSummaryData,'professionalSummary');
  this.router.navigate(['dashboard/form/career-objective'])
}
}
