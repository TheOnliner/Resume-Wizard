import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-middilcontent',
  templateUrl: './middilcontent.component.html',
  styleUrls: ['./middilcontent.component.scss']
})
export class MiddilcontentComponent implements OnInit {
  url="./assets/image/logo1.png";
  url1="./assets/image/pro.png";

  createbtn:boolean = false;
  editbtn:boolean = false

  constructor(private router:Router, private formService:FormsService, private localStorage:LocalstorageService) { }

  ngOnInit() {
    const userId = this.localStorage.getUserId()
    // console.log(userId);
    this.formService.checkProfile(userId).subscribe((data)=>{
      console.log(data);
      if(data.length !== 0){
          this.createbtn = true;
          this.editbtn = false;
          // this.formService.toggleEditMode(true);
          // console.log('Edit mode')
          // const userId = this.localStorage.getUserId();
          console.log('Edit mode')
          this.formService.toggleEditMode(true);
          this.formService.getUserProfile(userId);
      }else{
          this.createbtn = false;
          this.editbtn = true;
      }
    })
  }


  createResume(){
   this.router.navigate(['/dashboard/form/education'])
  }

  editResume(){
    this.router.navigate(['/dashboard/form/education'])
    
    }
  }

