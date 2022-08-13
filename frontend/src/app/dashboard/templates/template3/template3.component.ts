import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { FormsService } from '../../service/forms.service';


@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component implements OnInit {
  @ViewChild('functional', {static:false}) el!: ElementRef;
  data:any;
  constructor(private formService:FormsService, private router:Router, private location:Location) { }


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
    let pdf = new jsPDF('p', 'mm', [1300, 950]);
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
