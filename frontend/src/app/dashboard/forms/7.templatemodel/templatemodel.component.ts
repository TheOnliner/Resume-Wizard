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
  disable: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private formService: FormsService,
    private localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {
    this._initTemplateForm();

    let prevData: any = this.formService.getData('contact');
    if (!prevData) this.disable = true;
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
    const templateFormData = {
      selection: value,
    };

    this.formService.save(templateFormData, 'template');

    const userId = this.localStorage.getUserId();
    this.formService.save(userId, 'user');

    if (this.formService.isEditMode) {
      this.formService.deleteProfile(userId).subscribe((data) => {
        // console.log(data);
      });
    }

    this.formService.saveprofile().subscribe((data) => {
      // console.log(data);

      // console.log(templateFormData.selection);

      if (templateFormData.selection === 'Simple') {
        this.router.navigate(['dashboard/form/download/simple']);
      }
      if (templateFormData.selection === 'Classic') {
        this.router.navigate(['dashboard/form/download/classic']);
      }
      if (templateFormData.selection === 'Modern') {
        this.router.navigate(['dashboard/form/download/modern']);
      }
    });
  }
}
