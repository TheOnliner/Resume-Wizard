import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { FormsService } from '../../../dashboard/service/forms.service';
import { PdfresumeService } from '../pdfresume.service';

@Component({
  selector: 'app-rmodern',
  templateUrl: './rmodern.component.html',
  styleUrls: ['./rmodern.component.scss']
})
export class RmodernComponent implements OnInit {
  @ViewChild('modern', {static:false}) el!: ElementRef;
  data:any;
  constructor(private pdfResumeService:PdfresumeService) { }

  ngOnInit(): void {
    this.pdfResumeService.data.subscribe((data)=>{
      this.data = data;
    })
  }

}
