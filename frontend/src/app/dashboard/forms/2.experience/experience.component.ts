import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  backToEducation(){
    this.router
    .navigate(['dashboard/form/education'])
  }
  toSkills(){
    this.router
    .navigate(['dashboard/form/skills'])
  }
}
