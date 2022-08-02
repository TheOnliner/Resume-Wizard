import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.scss']
})
export class UserformsComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:[''],
      email:[''],
      password:[''],
      isadmin:['']
    })
  }

  onSubmit(){
    console.log('I am button')
  }
}
