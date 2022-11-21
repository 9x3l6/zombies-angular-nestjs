import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Video } from '../../videos';
import videos from 'api/data/videos.data.json';
import { VideosService } from 'src/app/videos.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  video: any | undefined;

  constructor(private router: Router, private route: ActivatedRoute, private videoService: VideosService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const link = routeParams.get('link');

    this.video = this.videoService.getVideo(link)
      // .subscribe((data: any) => this.video = data);
 
  }

}
