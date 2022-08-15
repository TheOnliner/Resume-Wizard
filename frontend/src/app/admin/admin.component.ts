import { Component, OnInit } from '@angular/core';
import { FormsService } from '../dashboard/service/forms.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  username: string;

  constructor(private localStorage:LocalstorageService, private formService:FormsService) { }

  ngOnInit(): void {
    const userId = this.localStorage.getUserId();

    this.formService.getUser(userId).subscribe((user:any)=>{
      console.log(user.name)
      this.username = user.name;
    })
  }

}
