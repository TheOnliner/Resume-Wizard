import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faComments = faComments;
  constructor() {}

  ngOnInit(): void {}
}
