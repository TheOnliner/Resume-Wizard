import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { EmailserviceService } from '../emailservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  nodeMailerForm :FormGroup;

  constructor(private formBuilder:FormBuilder,private emailService:EmailserviceService,private auth:AuthService) { }

  ngOnInit(): void {
    this.nodeMailerForm = this.formBuilder.group({
      email:[null,[Validators.required,Validators.email]]
   });
  }

  sendMail(){
    const generatePassword = (
      length = 20,
      wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
    ) =>
      Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => wishlist[x % wishlist.length])
        .join('')
    
    let password = generatePassword(11);
    console.log(password);

    let email  = this.nodeMailerForm.value.email;
    this.auth.forgotPassword(email).subscribe(data=>{
      console.log(data);
    })
    let reqObj = {
      email:email,
      password:password
    }
    console.log(reqObj);
    // this.emailService.sendMessage(reqObj).subscribe(data=>{
    //   console.log(data);
    // })
  }
}
