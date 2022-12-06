import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
// import { Post } from '../../post/posts';
import { PostsService } from 'src/app/post/posts.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostPageComponent implements OnInit {
  post: any | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostsService,
  ) { }

  async ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const link = routeParams.get('link');
    this.post = await this.postService.getPost(link);
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
