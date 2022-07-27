import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  // displayModal: boolean;
  displayModal = true;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.toggle.subscribe((toggle) => {
      if (toggle) {
        // this.displayModal = true;
      }
    });
  }
}
