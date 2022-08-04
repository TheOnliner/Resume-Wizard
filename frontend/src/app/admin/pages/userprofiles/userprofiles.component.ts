import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../../models/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.scss'],
})
export class UserprofilesComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getUsers();
  }

  deleteUser(userid: string) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete the user?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userid).subscribe(
          (res) => {
            this._getUsers();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'The selected user has been deleted',
            });
          },
          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Cannot delete user',
            });
          }
        );
      },
      reject: () => {},
    });
  }





  updateUser(userId:string){
    this.router.navigateByUrl(`admin/userprofiles/forms/${userId}`)
   
  }

  private _getUsers() {
    this.usersService.getUsers().subscribe((userdata) => {
      this.users = userdata;
    });
  }
}
