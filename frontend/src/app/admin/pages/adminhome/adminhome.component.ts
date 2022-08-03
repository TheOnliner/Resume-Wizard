import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent implements OnInit {
  data: any;
  chartOptions: any;
  adminlength:number;
  userlength:number;
  constructor(private userService: UsersService ) {}

  ngOnInit(){
    this.adminuserlength();
}

makePieChart(){
  this.data = {
    labels: ['Admins','Users'],
    datasets: [
        {
            data: [this.adminlength, this.userlength],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }
    ]
  }
}
 adminuserlength(){
    return this.userService.getUsers().subscribe(data=>{
      this.adminlength = data.filter((user:User)=>user.isAdmin ===true).length;
      this.userlength = data.filter((user:User)=>user.isAdmin !==true).length;
      this.makePieChart();
    })
}
}