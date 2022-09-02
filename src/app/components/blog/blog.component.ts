import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blog: any;

  constructor(private service: BlogService) {}

  ngOnInit(): void {
    this.service.getBlog().subscribe((response) => {
      this.blog = response;
    });
  }
}
