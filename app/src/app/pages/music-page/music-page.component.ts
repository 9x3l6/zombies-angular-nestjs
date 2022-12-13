import { Component, OnInit } from '@angular/core';

import { MusicService } from 'src/app/music/music.service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {
  videos: any | undefined;
  
  constructor(private musicService: MusicService) {
    this.musicService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }

  ngOnInit(): void {
  }

}
