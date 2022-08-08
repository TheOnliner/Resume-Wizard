import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  apiURLUsers = environment.apiURL + 'profiles/form';

  savedData : any[] = [];

  constructor(private http: HttpClient) { }

  save(formfields:Object){
  this.savedData.push(formfields);
  console.log(this.savedData);
  }
}
