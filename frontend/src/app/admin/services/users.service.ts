import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/resumewiz/users');
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      'http://localhost:3000/api/resumewiz/users',
      user
    );
  }

  deleteUser(userId: string): Observable<Object> {
    return this.http.delete<Object>(
      `http://localhost:3000/api/resumewiz/users/${userId}`
    );
  }
}
