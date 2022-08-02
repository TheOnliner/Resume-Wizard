import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsersService } from 'src/app/admin/services/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-userforms',
  templateUrl: './userforms.component.html',
  styleUrls: ['./userforms.component.scss']
})
export class UserformsComponent implements OnInit {
  form: FormGroup;
  isSubmitted:boolean= false;

  constructor(private formBuilder:FormBuilder,private userservice:UsersService, private messageService: MessageService ) { }

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
    
    const user: User ={
      name: this.userForm?.['username'].value,
      email: this.userForm?.['email'].value,
      password: this.userForm?.['password'].value,
      isAdmin: this.userForm?.['isadmin'].value,

    }
    this.userservice.createUser(user).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Success', detail:'User added'});
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Cannot add user'});
    });
  }

  get userForm(){
    return this.form.controls;
  }
}
