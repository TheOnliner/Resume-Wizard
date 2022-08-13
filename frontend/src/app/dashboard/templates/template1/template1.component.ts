import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';
import { jsPDF } from "jspdf";
import { Location } from '@angular/common';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {
  @ViewChild('simple', {static:false}) el!: ElementRef;
  data:any;
  constructor(private formService:FormsService, private router:Router, private location: Location) { }


  ngOnInit(): void {
    this.getData();
  }

getData(){
 this.data = this.formService.getProfile()

 if(!this.data.education){
  this.router.navigate(['/dashboard/form/education'])
      }
}
  
  downloadpdf(){
                                // Height,width [1300, 1040]
    let pdf = new jsPDF('p', 'mm', [1000, 750]);
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("Resume.pdf");
      }
    });
  }

  changeTemplate(){
    this.location.back()
  }
}
