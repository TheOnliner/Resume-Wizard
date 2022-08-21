import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/homepage/home.service';

@Component({
  selector: 'app-rheader',
  templateUrl: './rheader.component.html',
  styleUrls: ['./rheader.component.scss']
})
export class RheaderComponent implements OnInit {

  constructor(private router: Router, private HomeService:HomeService) { }

  ngOnInit(): void {
  }
  signupClicked(){
    this.router.navigate(['/'])
    this.HomeService.toggle.next(true);
  }
  loginClicked(){
    this.router.navigate(['/login']) 
  }

}
