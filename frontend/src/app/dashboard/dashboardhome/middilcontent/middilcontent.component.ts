import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/localstorage.service';
import { FormsService } from '../../service/forms.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';
import { HttpParameterCodec } from '@angular/common/http';
import { Buffer } from 'buffer/';

@Component({
  selector: 'app-middilcontent',
  templateUrl: './middilcontent.component.html',
  styleUrls: ['./middilcontent.component.scss'],
})
export class MiddilcontentComponent implements OnInit {
  url = './assets/image/logo1.png';
  url1 = './assets/image/pro.png';

  @ViewChild('sharelink', { static: false }) el!: ElementRef;
  editbtn: boolean = false;
  RW_URL: string;
  constructor(
    private router: Router,
    private formService: FormsService,
    private localStorage: LocalstorageService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    const userId = this.localStorage.getUserId();
    this.formService.checkProfile(userId).subscribe((data) => {
      if (data.length !== 0) {
        this.editbtn = false;
        this.formService.toggleEditMode(true);
        let URL: string = environment.URL;
        let userIdcoded = Buffer.from(userId).toString('base64');
        this.el.nativeElement.value = `${URL}/resumewiz/view/resume?id=${userIdcoded}`;
        this.RW_URL = this.el.nativeElement.value;
        this.formService.getUserProfile(userId);
      } else {
        this.editbtn = true;
      }
    });
  }

  createResume() {
    this.router.navigate(['/dashboard/form/education']);
  }

  editResume() {
    this.router.navigate(['/dashboard/form/education']);
  }

  copyMessage(text: string) {
    navigator.clipboard
      .writeText(text)
      .then()
      .catch((e) => console.log(e));
  }
}
