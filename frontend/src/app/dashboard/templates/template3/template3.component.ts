import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.scss']
})
export class Template3Component implements OnInit {
  @ViewChild('doc3', {static:false}) el!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  downloadpdf(){
    let pdf = new jsPDF('p', 'mm', [970, 820]);
    pdf.html(this.el.nativeElement,{
    callback:(pdf: any)=>{
    pdf.save("Resume.pdf");
  }
  });
  }
 
}
