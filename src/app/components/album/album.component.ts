import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album: any;
  constructor(private service: AlbumService) {}

  ngOnInit(): void {
    this.service.getAlbum().subscribe((response) => {
      this.album = response;
    });
  }
}
