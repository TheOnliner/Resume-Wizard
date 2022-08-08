import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
backToSkills(){
  this.router.navigate(['dashboard/form/skills'])
}

toObjective(){
  this.router.navigate(['dashboard/form/career-objective'])
}
}
