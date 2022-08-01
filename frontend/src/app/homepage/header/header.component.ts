import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faHatWizard = faHatWizard;
  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {}
  signupClicked() {
    this.homeService.toggle.next(true);
  }
  loginClicked() {
    this.router.navigate(['/login']);
  }
}
