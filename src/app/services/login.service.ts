import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url = 'https://localhost:7074/User/login';

  onLogin(form:any){
    return this.http.post(this.url,form);
  }

  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

  GetToken(){
    return localStorage.getItem('token') || '';
  }

}
