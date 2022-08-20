import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalresume',
  templateUrl: './digitalresume.component.html',
  styleUrls: ['./digitalresume.component.scss']
})
export class DigitalresumeComponent implements OnInit {
  url:any;
  format:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event:any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
}
