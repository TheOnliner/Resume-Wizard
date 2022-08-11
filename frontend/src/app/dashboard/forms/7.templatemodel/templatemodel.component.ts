import { Component, OnInit, Output } from '@angular/core';
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

  backToContact(){
    this.router.navigate(['dashboard/form/contact'])
  }

  onSubmit(value:String){
    const templateFormData = {
      selection: value
    }
  
    this.formService.save(templateFormData,'template');
    
    this.formService.saveprofile().subscribe(data=>{
      console.log(data);

      console.log(templateFormData.selection)

    if(templateFormData.selection === 'Simple'){
      this.router.navigate(['dashboard/form/download/simple'])
    }
    if(templateFormData.selection === 'Classic'){
      this.router.navigate(['dashboard/form/download/classic'])
    }
    if(templateFormData.selection === 'Modern'){
      this.router.navigate(['dashboard/form/download/modern'])
    }
    })
  }
}
