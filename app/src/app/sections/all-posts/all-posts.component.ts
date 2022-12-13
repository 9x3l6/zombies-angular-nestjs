import { Component, OnInit } from '@angular/core';

import { PostsService } from 'src/app/post/posts.service';

@Component({
  selector: 'app-sections-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts: any | undefined;

  constructor(private postService: PostsService) {
    this.postService.getPosts().subscribe((data: any) => this.posts = data);
  }

  ngOnInit(): void {
  }

}
