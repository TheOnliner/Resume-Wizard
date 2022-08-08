import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-middilcontent',
  templateUrl: './middilcontent.component.html',
  styleUrls: ['./middilcontent.component.scss']
})
export class MiddilcontentComponent implements OnInit {
  url="./assets/image/logo1.png";
  url1="./assets/image/pro.png";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  createResume(){
   this.router.navigate(['/dashboard/form/education'])
  }
}
