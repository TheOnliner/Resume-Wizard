import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

}

