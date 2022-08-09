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

  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initPrSummaryForm();
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
