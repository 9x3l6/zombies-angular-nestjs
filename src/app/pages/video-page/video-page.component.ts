import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VideosService } from 'src/app/video/videos.service';
import { MusicService } from 'src/app/music/music.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {

  video: any | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private videoService: VideosService,
    private musicService: MusicService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const link = routeParams.get('link');

    this.videoService.getVideo(link).subscribe(vid => {
      this.video = vid;
    });
    if ( ! this.video ) {
      this.musicService.getVideo(link).subscribe(vid => {
        this.video = vid;
      });
    }

    // if (!this.video) {
    //   this.router.navigate(['/not-found']);
    // }
  }

}
