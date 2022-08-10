import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-templatemodel',
  templateUrl: './templatemodel.component.html',
  styleUrls: ['./templatemodel.component.scss']
})
export class TemplatemodelComponent implements OnInit {
  templateFormGroup: FormGroup;

  constructor(private router:Router,private formBuilder: FormBuilder,private formService:FormsService) { }

  ngOnInit(): void {
    this._initTemplateForm()
  }

  private _initTemplateForm(){
    this.templateFormGroup = this.formBuilder.group({
      selection:'',
    });
}

  get templateForm() {
    return this.templateFormGroup.controls;
  }

  onSubmit(value:String){
    const templateFormData = {
      selection: value
    }
  
    this.formService.save(templateFormData,'template');

    this.formService.saveprofile().subscribe(data=>{
      console.log(data);
    })
  }
}
