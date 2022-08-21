import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  apiURLProfiles = environment.apiURL + 'profiles/form';
  apiURLusers = environment.apiURL + 'users';

  isEditMode: boolean;
  EditModeChange: Subject<boolean> = new Subject<boolean>();

  savedData: { [key: string]: Profile[] } = {};

  constructor(private http: HttpClient) {
    this.isEditMode = false;
  }

     toggleEditMode(value:boolean) {
      this.isEditMode = value;
      this.EditModeChange.next(this.isEditMode);
  }

  isEdit(){
    return this.isEditMode
    }

  save(formfields: any, name: string) {
    this.savedData[name as keyof Profile] = formfields;
  }

  getData(name: string) {
    return this.savedData?.[name];
  }

  getProfile() {
    return this.savedData;
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(this.apiURLusers +`/${userId}`)
  }

  async getUserProfile(userId: string) {
    let data: any = await this.http
      .get<Profile[]>(this.apiURLProfiles + `/userprofile/${userId}`)
      .toPromise();
    this.savedData = data[0];
  }

  getCandidateProfile(userId: string):Observable<Profile[]> {
    return this.http
      .get<Profile[]>(this.apiURLProfiles + `/userprofile/${userId}`)
  }

  checkProfile(userId: string): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      this.apiURLProfiles + `/userprofile/${userId}`
    );
  }

  saveprofile(): Observable<Profile> {
    return this.http.post<Profile>(`${this.apiURLProfiles}`, this.savedData);
  }

  deleteProfile(userId: string):Observable<Profile> {
    return this.http.delete<Profile>(this.apiURLProfiles + `/userprofile/${userId}`)
}

}