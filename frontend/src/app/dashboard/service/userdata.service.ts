import { Injectable } from '@angular/core';
import { Userprofile } from 'src/app/models/userprofile';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  apiURLUserProfiles = environment.apiURL + 'userprofiles/form';
  constructor(private http: HttpClient) { }

  saveUserData(data:Userprofile): Observable<Userprofile> {
    return this.http.post<Userprofile>(`${this.apiURLUserProfiles}`, data);
  }

  getUserData(userId:string): Observable<Userprofile[]> {
    return this.http.get<Userprofile[]>(`${this.apiURLUserProfiles}/${userId}`);
  }

  deleteUserData(userId:string): Observable<Userprofile> {
    return this.http.delete<Userprofile>(`${this.apiURLUserProfiles}/${userId}`);
  }
}
