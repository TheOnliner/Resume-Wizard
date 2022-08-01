import { Component, OnInit } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faHatWizard=faHatWizard;
  constructor() { }

  ngOnInit(): void {
  }

}
