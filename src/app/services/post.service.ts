import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://dummyapi.online/api/movies";

  constructor(private client: HttpClient) { }

  getPost() {
    return this.client.get(this.url);
  }

}
