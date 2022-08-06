import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumecontact',
  templateUrl: './resumecontact.component.html',
  styleUrls: ['./resumecontact.component.scss']
})
export class ResumecontactComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  backToCareerObjective(){
    this.route.navigate(['dashboard/form-career-objective'])
  }
  toTemplates(){
    this.route.navigate(['dashboard/templates'])
  }
}
