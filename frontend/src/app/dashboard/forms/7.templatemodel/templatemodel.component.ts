import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-templatemodel',
  templateUrl: './templatemodel.component.html',
  styleUrls: ['./templatemodel.component.scss'],
})
export class TemplatemodelComponent implements OnInit {
  templateFormGroup: FormGroup;
  prevData:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formService: FormsService,
    private localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {
    this._initTemplateForm();

    this.prevData = this.formService.getData('contact');
  }

  private _initTemplateForm() {
    this.templateFormGroup = this.formBuilder.group({
      selection: '',
    });
  }

  get templateForm() {
    return this.templateFormGroup.controls;
  }

  backToContact() {
    this.router.navigate(['dashboard/form/contact']);
  }

  onSubmit(value: String) {
    if(!this.prevData) return

    const templateFormData = {
      selection: value,
    };

    this.formService.save(templateFormData, 'template');

    const userId = this.localStorage.getUserId();
    this.formService.save(userId, 'user');

    if (this.formService.isEditMode) {
      this.formService.deleteProfile(userId).subscribe((data) => {
      });
    }

    this.formService.saveprofile().subscribe((data) => {

      if (templateFormData.selection === 'Simple') {
        this.router.navigate(['dashboard/form/download/simple']);
      }
      if (templateFormData.selection === 'Functional') {
        this.router.navigate(['dashboard/form/download/functional']);
      }
      if (templateFormData.selection === 'Modern') {
        this.router.navigate(['dashboard/form/download/modern']);
      }
    });
  }
}
