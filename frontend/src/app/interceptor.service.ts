import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from './admin/services/users.service';
import { FormsService } from './dashboard/service/forms.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(public userService:UsersService) {  }

  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   this.userService.isLoading.next(true);
  // }
}
