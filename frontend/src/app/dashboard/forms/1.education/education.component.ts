import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(){
  }
  backToDashboard(){
    this.router.navigate(['dashboard'])
  }

  toExperience(){
this.router.navigate(['dashboard/form-experience'])
  }
}
