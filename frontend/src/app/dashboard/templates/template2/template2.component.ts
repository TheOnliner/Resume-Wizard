import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../../service/forms.service';
import { jsPDF } from "jspdf";
import { Location } from '@angular/common';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {
  @ViewChild('modern', {static:false}) el!: ElementRef;
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
    let pdf = new jsPDF('p', 'mm', [1400, 1600]);
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("Resume.pdf");
      }
    });

    this.router.navigate(['/dashboard/home'])
  }

  changeTemplate(){
    this.location.back()
  }

}
