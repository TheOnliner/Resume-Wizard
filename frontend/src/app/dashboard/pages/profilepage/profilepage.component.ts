import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/localstorage.service';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit {
  editmode:boolean = false;
  formdata: any = '';
  constructor(private userdataService:UserdataService, private localStorage:LocalstorageService) { }

  ngOnInit(): void {
    const userId = this.localStorage.getUserId();
    if (!userId) return;

    this.userdataService.getUserData(userId).subscribe((data) => {
      this.formdata = data[0];
  })

  this.userdataService.isEdit.subscribe(val=>{
    this.editmode = val;
  })
}

onEdit(){
  this.userdataService.isEdit.next(true);
  this.editmode = true;
 }

}