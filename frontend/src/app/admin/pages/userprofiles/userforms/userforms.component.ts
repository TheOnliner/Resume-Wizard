import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.scss']
})
export class UserformsComponent implements OnInit {
  form: FormGroup;
  isSubmitted:boolean= false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
      isadmin:[false, Validators.requiredTrue]
    })
  }

  onSubmit(){
    this.isSubmitted =true;
    if(this.form.invalid){
      return;    
    }

    console.log(this.form.controls?.['username'].value);
    console.log(this.form.controls?.['email'].value);
    console.log(this.form.controls?.['password'].value);
    console.log(this.form.controls?.['isadmin'].value);
  }

  get userForm(){
    return this.form.controls;
  }
}
