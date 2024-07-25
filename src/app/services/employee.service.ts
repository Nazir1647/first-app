import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'https://localhost:7170/api/Employee/';
  constructor(private http:HttpClient) { }

  getEmployee(){
    return this.http.get(this.url + 'GetList');
  }

  save(body:any){
    debugger
    return this.http.post(this.url + 'Save',body);
  }


}
