import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from 'src/app/dashboard/service/forms.service';
import { Profile } from 'src/app/models/profile';
import { PdfresumeService } from '../pdfresume.service';
import { Buffer } from 'buffer/';

@Component({
  selector: 'app-rpdf',
  templateUrl: './rpdf.component.html',
  styleUrls: ['./rpdf.component.scss']
})
export class RpdfComponent implements OnInit {
  simple:boolean; functional:boolean ; modern:boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private formsService:FormsService, private pdfResumeService:PdfresumeService) { 
    this.activatedRoute.queryParams.subscribe(url =>{
      console.log(url?.['id']);
      let userIDcoded:string = url?.['id'];
      let userID:string = Buffer.from(userIDcoded, 'base64').toString('binary')

      this.formsService.getUserProfile(userID).then(() =>{
        let data:any = this.formsService.getProfile()
        if(data.template.selection === 'Simple'){
          this.simple = true;
          this.pdfResumeService.data.next(data)
        }
        else if(data.template.selection === 'Functional'){
          this.functional = true;
          this.pdfResumeService.data.next(data)
        }
        else if(data.template.selection === 'Modern'){
          this.modern = true;
          this.pdfResumeService.data.next(data)
        }
      })
    })
  }

  ngOnInit(): void {
  }


}
