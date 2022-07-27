import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor() {}
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  ngOnInit(): void {}
}
