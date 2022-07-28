import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURLUsers = environment.apiURL + 'users';
  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiURLUsers}`, {
      name,
      email,
      password,
    });
  }
}
