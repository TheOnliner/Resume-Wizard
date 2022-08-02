import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.scss']
})
export class UserprofilesComponent implements OnInit {


  users = [
    {
      name:"Abhi",
      email: "jbabhi@gmail.com",
      isAdmin: "No"
    },
    {
      name:"Sasi",
      email: "sasi@gmail.com",
      isAdmin: "Yes"
    },
    {
      name:"Vivek",
      email: "vivek@gmail.com",
      isAdmin: "No"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
