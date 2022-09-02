import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // private url = 'https://abdullahfahmi.com/api/blog/list.php';
  constructor(private httpClient: HttpClient) {}
  getBlog() {
    return this.httpClient.get(this.url);
  }
}
