import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education, Profile } from '../../models/profile';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  apiURLUsers = environment.apiURL + 'profiles/form';

  savedData :Profile[] = [];

  constructor(private http: HttpClient) { }

  save(formfields:any,name:string){
    let key = name;
    this.savedData.push({[`${key}`] : formfields})
    console.log(this.savedData);
  }
}
