import { Component, OnInit } from '@angular/core';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faHatWizard = faHatWizard;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {}
  signupClicked() {
    this.homeService.toggle.next(true);
  }
}
