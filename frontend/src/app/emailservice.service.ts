import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {
  apiURLEmail = environment.apiURL + 'email';
  constructor(private httpreq:HttpClient) { }

  sendMessage(body:any){
    let headers = {
      headers : new HttpHeaders({
        'Content-Type' :'application/json'
      })
    }
    return this.httpreq.post(`${this.apiURLEmail}`,body,headers);
  }
}
