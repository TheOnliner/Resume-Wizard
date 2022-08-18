import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {
  username: string;
  
  constructor(private localStorage:LocalstorageService, private formService: FormsService,
    private router:Router) { }


  ngOnInit(): void {
    const userId = this.localStorage.getUserId();
    this.formService.getUser(userId).subscribe((user:any)=>{
      this.username = user.name;
    })

    
  }

  onLogout() {
    this.localStorage.removeToken();
    this.router.navigate(['']);
    this.formService.savedData = {};
  }

}
