import { Component, OnInit } from '@angular/core';
import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  faCloudDownloadAlt = faCloudDownloadAlt;
  faMousePointer = faMousePointer;
  faFileAlt = faFileAlt;
  constructor() {}

  ngOnInit(): void {}
}
