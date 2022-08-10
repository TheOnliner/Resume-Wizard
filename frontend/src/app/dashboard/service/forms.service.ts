import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  apiURLProfiles = environment.apiURL + 'profiles/form';

  savedData: { [key: string]: Profile[] } = {};

  constructor(private http: HttpClient) { }

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

  saveprofile():Observable<Profile>{
    console.log(this.savedData);
    console.log('The  above is the saved Data');
    return this.http.post<Profile>(`${this.apiURLProfiles}`,this.savedData);
  }
}
