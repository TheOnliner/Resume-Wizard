import { Component, OnInit } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})
export class UserNavbarComponent implements OnInit {
  faHatWizard = faHatWizard;
  constructor() { }

  ngOnInit(): void {
  }

}
