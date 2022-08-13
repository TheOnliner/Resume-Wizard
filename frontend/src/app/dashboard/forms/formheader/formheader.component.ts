import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LocalstorageService } from 'src/app/localstorage.service';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-formheader',
  templateUrl: './formheader.component.html',
  styleUrls: ['./formheader.component.scss'],
})
export class FormheaderComponent implements OnInit {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formService: FormsService,
    private localStorage: LocalstorageService
  ) {}

  ngOnInit(): void {}

  onHome() {
    if((window.location.pathname !== '/dashboard/form/download/simple') &&
       (window.location.pathname !== '/dashboard/form/download/classic') && 
       (window.location.pathname !== '/dashboard/form/download/modern'))
    {
      this.confirmationService.confirm({
        message: 'Changes made here will not be saved',
        header: 'Are you sure you want to leave this page?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.router.navigate(['/dashboard']);
          this.formService.savedData = {};
        },
        reject: () => {},
      });
    } else {
      this.router.navigate(['/dashboard']);
    }
    }

  onLogout() {
    this.localStorage.removeToken();
    this.router.navigate(['']);
  }
}
