import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { UserdataService } from '../../service/userdata.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.scss']
})
export class ProfilepageComponent implements OnInit,OnDestroy {
  editmode:boolean = false;
  formdata: any = '';
  constructor(private userdataService:UserdataService, private localStorage:LocalstorageService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.localStorage.getUserId();
    if (!userId) return;

    this.userdataService.getUserData(userId).subscribe((data) => {
      if(data.length !== 0){
        this.formdata = data[0];
      }
  })

  this.userdataService.isEdit.subscribe(val=>{
    this.editmode = val;

    if(!val){
      this.userdataService.getUserData(userId).subscribe((data) => {
        this.formdata = data[0];
    })
    }
  })
}

onEdit(){
  this.userdataService.isEdit.next(true);
  this.editmode = true;
 }

 ngOnDestroy() {
  this.userdataService.isEdit.next(false);
  }
}
