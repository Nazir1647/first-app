import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "https://localhost:7170/api/Student"

  constructor(private http: HttpClient) { }

  getStudent() {
    return this.http.get(this.url + "/GetProduct");
  }

  SaveStudent(form: any) {
    return this.http.post(this.url + "/SaveName", form);
  }

  GetCountry() {
    return this.http.get(this.url + "/GetCountry");
  }

  GetState(id:number) {
    return this.http.get(this.url + "/GetState?id=" + id);
  }

  GetStates(ids:any) {
    return this.http.post(this.url + "/GetStates", ids);
  }
 
  DeleteStudent(id:number) {
    return this.http.get(this.url + "/DeleteStudent?id=" + id);
  }

  GetProductList(){
    return this.http.get('https://localhost:7074/api/Product/Get');
  }

}
