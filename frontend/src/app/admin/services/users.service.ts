import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiURLusers = environment.apiURL + 'users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiURLusers);
  }

  getUser(userId:string): Observable<User> {
    return this.http.get<User>(this.apiURLusers + `/${userId}`); 
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      this.apiURLusers + `/${user.id}`,
      user
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.apiURLusers,
      user
    );
  }

  deleteUser(userId: string): Observable<Object> {
    return this.http.delete<Object>(
      this.apiURLusers + `/${userId}`
    );
  }
}
