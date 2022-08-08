import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-objective',
  templateUrl: './career-objective.component.html',
  styleUrls: ['./career-objective.component.scss']
})
export class CareerObjectiveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToSummary(){
    this.router.navigate(['dashboard/form/summary'])
  }
  toContact(){
this.router.navigate(['dashboard/form/contact'])
  }
}
