import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../../../dashboard/service/forms.service';
import { jsPDF } from "jspdf";
import { Location } from '@angular/common';
import { PdfresumeService } from '../pdfresume.service';

@Component({
  selector: 'app-rsimple',
  templateUrl: './rsimple.component.html',
  styleUrls: ['./rsimple.component.scss']
})
export class RsimpleComponent implements OnInit {
  @ViewChild('simple', {static:false}) el!: ElementRef;
  data:any;
  constructor(private pdfResumeService:PdfresumeService) { }

  ngOnInit(): void {
    this.pdfResumeService.data.subscribe((data)=>{
      this.data = data;
    })
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
}

