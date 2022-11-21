import { Component, OnInit } from '@angular/core';

import allPosts from '../../../../api/data/posts.data.json';
@Component({
  selector: 'app-sections-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts = allPosts
  constructor() { }

  ngOnInit(): void {
  }

}
