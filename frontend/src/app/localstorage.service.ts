import { Injectable } from '@angular/core';

const TOKEN = 'jwtToken';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setToken(data: any) {
    localStorage.setItem(TOKEN, data);
  }
  getToken(): string {
    return (localStorage.getItem(TOKEN)!);
  }
  removeToken() {
    localStorage.removeItem(TOKEN);
  }

  getUserId(){
    const token = this.getToken();
    if (token) {
      const tokenDecode = JSON.parse(atob(token.split('.')[1]));
      if(tokenDecode) {
        return tokenDecode.userId
      } else {
        return null;
      }
    } else {
      return null;
    }
 }
}
