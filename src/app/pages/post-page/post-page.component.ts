import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Post } from '../../posts';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post: any | undefined;
  // text: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    // console.log(posts, posts.find(post => post.link === this.route.snapshot.paramMap.get('link')))
    const routeParams = this.route.snapshot.paramMap;
    const link = routeParams.get('link');

    this.post = this.postService.getPost(link)
    this.post.text.subscribe((data: any) => this.post.text = data);
 
  }

  onReady() {

  }
  onLoad(event: any): void {
    console.log(event)
  }

  onError(event: any): void {
    console.log(event)
  }

}
