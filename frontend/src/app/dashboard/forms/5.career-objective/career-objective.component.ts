import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective.component.html',
  styleUrls: ['./career-objective.component.scss']
})
export class CareerObjectiveComponent implements OnInit {
  careerObjectiveFormGroup: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initCareerObjectiveForm();

    let data:any = this.formService.getData('careerObjective');
    if(data){
      this.careerObjectiveForm?.['objective'].setValue(data.objective);
    }
  }
  backToSummary(){
    this.router.navigate(['dashboard/form/summary'])
  }

  private _initCareerObjectiveForm(){
    this.careerObjectiveFormGroup = this.formBuilder.group({
      objective:['',Validators.required],
    });
  }

  get careerObjectiveForm() {
    return this.careerObjectiveFormGroup.controls;
  }

  onSubmit(){
    const careerObjectiveData = {
      objective: this.careerObjectiveForm?.['objective'].value,
    }

    this.formService.save(careerObjectiveData,'careerObjective');
    this.router.navigate(['dashboard/form/contact'])
  }
}
