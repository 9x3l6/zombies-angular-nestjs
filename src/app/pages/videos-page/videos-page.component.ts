import { Component, OnInit } from '@angular/core';

import { VideosService } from 'src/app/video/videos.service';

// import { VIDEO, VIDEO_URL } from 'src/app/video/videos';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent implements OnInit {
  videos: any | undefined;

  constructor(private videoService: VideosService) {
    
  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    })
  }

}
