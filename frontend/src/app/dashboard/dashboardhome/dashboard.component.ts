import { Component, OnInit } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  faHatWizard = faHatWizard;
  constructor() { }

  ngOnInit(): void {
  }

}
