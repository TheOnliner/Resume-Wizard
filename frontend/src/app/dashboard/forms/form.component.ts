import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormsService } from '../service/forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  items: MenuItem[];

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    let selection = 'simple';
    this.items = [
      {
        label: 'Education',
        routerLink: 'education',
      },
      {
        label: 'Experience',
        routerLink: 'experience',
      },
      {
        label: 'Skills',
        routerLink: 'skills',
      },
      {
        label: 'Summary',
        routerLink: 'summary',
      },
      {
        label: 'Career-Objective',
        routerLink: 'career-objective',
      },
      {
        label: 'Contact',
        routerLink: 'contact',
      },
      {
        label: 'Templates',
        routerLink: 'templates',
      },
      {
        label: 'Download PDF',
        routerLink: 'download',
      },
    ];
  }
}
