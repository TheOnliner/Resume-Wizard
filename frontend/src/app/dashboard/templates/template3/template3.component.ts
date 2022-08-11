import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import { FormsService } from '../../service/forms.service';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component implements OnInit {
  @ViewChild('doc3', {static:false}) el!: ElementRef;
  constructor(private formService:FormsService) { }
  data:any;

  ngOnInit(): void {
    this.getData();
    console.log(this.data.education.school)
  }

getData(){
 this.data = this.formService.getProfile()
//  console.log(this.data);
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
}
