import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { FormsService } from '../../../dashboard/service/forms.service';
import { PdfresumeService } from '../pdfresume.service';

@Component({
  selector: 'app-rfunctional',
  templateUrl: './rfunctional.component.html',
  styleUrls: ['./rfunctional.component.scss']
})
export class RfunctionalComponent implements OnInit {
  @ViewChild('functional', {static:false}) el!: ElementRef;
  data:any;
  constructor(private pdfResumeService:PdfresumeService) { }


  ngOnInit(): void {
    this.pdfResumeService.data.subscribe((data)=>{
      this.data = data;
    })
  }

}
