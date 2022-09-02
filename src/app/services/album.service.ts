import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private httpClient: HttpClient) {}
  getAlbum() {
    return this.httpClient.get(this.url);
  }
}
