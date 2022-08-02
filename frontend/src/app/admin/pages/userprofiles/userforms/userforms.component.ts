import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
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
  isEdit = false;
  userId:string ;

  constructor(private formBuilder:FormBuilder,private userservice:UsersService, private messageService: MessageService, private location: Location,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
      isadmin:[false]
    })

    this._checkEdit();
  }



  onSubmit(){
    this.isSubmitted =true;
    console.log(this.userForm?.['username'].value)
    console.log(this.userForm?.['isadmin'].value)
    if(this.form.invalid){
      return;    
    }
    const user: User ={
      id:this.userId,
      name: this.userForm?.['username'].value,
      email: this.userForm?.['email'].value,
      password: this.userForm?.['password'].value,
      isAdmin: this.userForm?.['isadmin'].value,
    }

    if(this.isEdit){
      this._updateUser(user)
    }else{
      this._addUser(user)
    }


  }

  get userForm(){
    return this.form.controls;
  }

  private _checkEdit(){
    this.route.params.subscribe(params => {
      if(params['id']){
        this.isEdit = true;
        this.userId = params['id'];
        this.userservice.getUser(params['id']).subscribe(user => {
          this.userForm?.['username'].setValue(user.name);
          this.userForm?.['email'].setValue(user.email);
          this.userForm?.['isadmin'].setValue(user.isAdmin);
        })
      }
    })
  }


  private _updateUser(user:User){
    this.userservice.updateUser(user).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Success', detail:'User added'})
      timer(1500).toPromise().then(finish =>{
        this.location.back();
      })
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Cannot add user'});
    });
  }

  private _addUser(user:User){
    this.userservice.createUser(user).subscribe(res=>{
      this.messageService.add({severity:'success', summary:'Success', detail:'User added'})
      timer(1500).toPromise().then(finish =>{
        this.location.back();
      })
    },
    (error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Cannot add user'});
    });
  }
}
