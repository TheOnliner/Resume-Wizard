import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  apiURLProfiles = environment.apiURL + 'profiles/form';
  apiURLusers = environment.apiURL + 'users';

  // isEditMode: boolean;
  // EditModeChange: Subject<boolean> = new Subject<boolean>();

  savedData: { [key: string]: Profile[] } = {};

  constructor(private http: HttpClient) {
    // this.isEditMode = false;
   }

//    toggleEditMode(value:boolean) {
//     this.isEditMode = value;
//     this.EditModeChange.next(this.isEditMode);
// }

// isEdit(){
//   return this.isEditMode
//   }

save(formfields:any,name:string){
  this.savedData[name as keyof Profile] = formfields;
  console.log(this.savedData);
}

getData(name:string){
  return this.savedData?.[name]
}

getProfile(){
  return this.savedData
}

async getUserProfile(userId:string) {
  let data:any = await this.http.get<Profile[]>(this.apiURLProfiles + `/userprofile/${userId}`).toPromise();
  this.savedData = data[0];
  // console.log(this.savedData);  
}

checkProfile(userId:string):Observable<Profile[]>{
  return this.http.get<Profile[]>(this.apiURLProfiles + `/userprofile/${userId}`)
}

  saveprofile():Observable<Profile>{
    console.log(this.savedData);
    console.log('The  above is the saved Data');
    return this.http.post<Profile>(`${this.apiURLProfiles}`,this.savedData);
  }
}
