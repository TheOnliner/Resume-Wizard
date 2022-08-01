import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURLUsers = environment.apiURL + 'users';
  constructor(private http: HttpClient, private token: LocalstorageService, private router: Router) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}/login`, {
      email,
      password,
    });
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }

  signup(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}`, {
      name,
      email,
      password,
    });
  }
}